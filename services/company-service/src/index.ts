import start from './start';
import dbConnection from './config/db/dbConnection';
// import envChecker from './util/checker/envChecker';
// import { broker, producer, consumer } from './adapters/messageBroker/kafka/connection';
// import { userCreatedProducer } from './adapters/messageBroker/kafka/producer';
// import { userCreatedConsumer } from './adapters/messageBroker/kafka/consumer';

(async () => {
    try {
        start;
        console.log('i am here');
        dbConnection();
        // await envChecker();
    } catch (error) {
        console.log('Something went wrong', error);
    }
})();
