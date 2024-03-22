import start from "./start";
import dbConnection from "./config/db/dbConnection";
import envChecker from "./util/checker/envChecker";
import {
  runConsumer,
  stopConsumer,
} from "./adapters/messageBroker/kafka/consumer";

(async () => {
  try {
    start;
    dbConnection();

    await runConsumer().catch((error: any) => {
      console.info(error);
    });

    process.on("SIGTERM", async () => {
      console.info("SIGTERM received");
      console.warn("consumer stopping");
      stopConsumer();
    });

    await envChecker();
  } catch (error) {
    console.log("Something went wrong", error);
  }
})();
