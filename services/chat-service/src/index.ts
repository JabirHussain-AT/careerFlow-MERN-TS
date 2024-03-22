import start from './start';
import dbConnection from './config/dbConnection';
import { runConsumer , stopConsumer } from "./adapters/messageBroker/kafka/consumer";
import envChecker from './utils/checker/envChecker';



( async () => {
    try {
        start;
        dbConnection();
        await envChecker();

        
        await runConsumer()
        .catch((error: any) => {
            console.info(error);
        })

        process.on('SIGTERM', async () => {
            console.info("SIGTERM received")
            console.log("consumer stopping");
            stopConsumer();
        })

    } catch (error) {
        console.log('Something went wrong', error);
    }
})();
