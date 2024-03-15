import cron from "node-cron";
import Jobs from "../../adapters/database/schemas/jobSchema";

const updateExpiredJobs = async () => {
  try {
    const currentDate = new Date();
    const expiredJobs = await Jobs.find({ jobExpiry: { $lt: currentDate } , status: true });
    if (expiredJobs.length > 0) {
      const updatePromises = expiredJobs.map(async (job: any) => {
        await Jobs.findByIdAndUpdate(job._id, { status: false });
      });
      await Promise.all(updatePromises);
      console.log("Expired jobs updated successfully.",expiredJobs);
    } else {
      console.log("No expired jobs found.");
    }
  } catch (error) {
    console.error("Error updating expired jobs:", error);
  }
};

const scheduleJobUpdate = () => {
  cron.schedule("*/30 * * * * *", async () => {
    console.log("Running job update task...");
    console.log("========================");
    await updateExpiredJobs();
  });
};

export default scheduleJobUpdate;
