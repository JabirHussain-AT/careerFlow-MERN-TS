const cron = require("node-cron");
const colors = require('colors');
const Jobs = require("../../adapters/database/schemas/jobSchema"); // Import your job model

// Define the cron job to run every hour
cron.schedule("0 * * * *", async () => {
  try {
    // Fetch all jobs
    const jobs = await Jobs.find();

    // Iterate through each job
    for (const job of jobs) {
      // Check if the job is active
      if (job.status) {
        // Check if the job's schedule date and time is finished for any applicant
        const isScheduleFinished = isScheduleDateFinished(job);

        if (isScheduleFinished && isScheduleFinished.value === true) {
          // Remove the schedule for the applicant whose schedule date and time is finished
          const result = await Jobs.updateOne(
            { _id: job._id, "applicants.applicantId": isScheduleFinished.applicantId },
            { $unset: { "applicants.$.schedule": "" } }
          );

          console.log(colors.yellow(
            `Schedule for applicant ${isScheduleFinished.applicantId} in job ${job._id} removed because its schedule date and time is finished.`
          ));
        }
      }
    }
  } catch (error) {
    console.error("Error occurred while processing cron job:", error);
  }
});

// Function to check if the schedule date and time of any of the job's applicants is finished
function isScheduleDateFinished(job) {
  const currentDate = new Date();
  for (const applicant of job.applicants) {
    if (applicant.schedule) {
      // Combine date and time strings and parse them into a Date object
      const scheduleDateTime = new Date(`${applicant.schedule.date}T${applicant.schedule.time}`);

      // Calculate the scheduled time plus 2 hours
      const scheduledTimePlusTwoHours = new Date(scheduleDateTime.getTime() + (2 * 60 * 60 * 1000)); // Adding 2 hours in milliseconds

      // Check if the scheduled time plus 2 hours is before the current time
      if (scheduledTimePlusTwoHours < currentDate) {
        return { value: true, applicantId: applicant.applicantId };
      }
    }
  }
  return null; // No applicant's schedule date and time is finished
}
