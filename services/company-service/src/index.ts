import start from './start';
import dbConnection from './config/db/dbConnection';
import { runConsumer , stopConsumer } from "./adapters/messageBroker/kafka/consumer";
import envChecker from './util/checker/envChecker';


( async () => {

    try {
        start;
        dbConnection();
        await envChecker();

        
        await runConsumer()
        .catch((error) => {
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
