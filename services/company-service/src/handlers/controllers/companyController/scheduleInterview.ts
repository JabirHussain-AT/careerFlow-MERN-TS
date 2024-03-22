import { Request, Response, NextFunction } from "express";
import { sendMessages } from "../../../util/externalServices/nodemailer/sendNotifications";
import { IDependencies } from "../../../entities/Interfaces/ICompanyInterface";

export = (dependencies: IDependencies): any => {
  const {
    usecases: { scheduleInterView_useCase },
  } = dependencies;

  const scheduleInterview = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const interviewData = req.body;
      const data = await scheduleInterView_useCase(dependencies).interactor(
        interviewData
      );

      let email = null;
      if (data && data.applicants && data.applicants.length) {
        for (const applicant of data.applicants) {
          if (applicant.applicantId == interviewData.applicantId) {
            email = applicant.email;
            break;
          }
        }
      }
      if (email !== null) {
        let Intro =
          "Hey Applicant  , We Scheduled An Interview with you on a time  , or There is an updation in the time please check it out through website on user profile ";
        let content =
          "" +
          interviewData?.date +
          " on time of " +
          interviewData?.time +
          ` like a ${interviewData?.InterviewType} `;
        const result = await sendMessages(email, content, Intro);
        console.log("🚀 ~ file: scheduleInterview.ts:35 ~ result:", result);
      }

      res.json({
        data: data,
        success: true,
        message: "scheduled  interview for job  successfully completed ",
      });
    } catch (err: any) {
      console.log(
        err,
        "Error occured when  the scheduling of interview  in the company form controller"
      );
      res.status(500).json({ error: "Internal Server Error" });
      next();
    }
  };

  return scheduleInterview;
};
