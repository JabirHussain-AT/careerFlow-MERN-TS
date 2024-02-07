import { consumer } from "./index";
import { createSubscriber, IUserSubscriber } from "./subscriber";

export const runConsumer = async () => {
  try {
    await consumer.connect().then(()=> console.log('connected kafka'))

    await consumer.subscribe({
      topic: "to-company",
      fromBeginning: true,
    });

    const subscriber = createSubscriber();

    await consumer.run({
      eachMessage: async ({ message }) => {
        const { key, value } = message;
        console.log(`Received message with key: ${key}, value: ${value}`);
        
        const subscriberMethod = String(key) as keyof IUserSubscriber;
        console.log(`Calling subscriber method: ${subscriberMethod}`);
        
        const subscriberData = JSON.parse(String(value));
      
        try {
          await subscriber[subscriberMethod](subscriberData);
          console.log(`Successfully processed message`);
        } catch (error: any) {
          console.error(`Error processing message: ${error?.message}`);
          throw new Error(error?.message);
        }
      },
      
    });
  } catch (error: any) {
    throw new Error("Kafka Consume Error : " + error?.message);
  }
};

export const stopConsumer = async () => {
  await consumer.stop();
  await consumer.disconnect();
};
