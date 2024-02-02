import { consumer } from "./index";
import { createSubscriber, IUserSubscriber } from "./subscriber";

export const runConsumer = async () => {
  try {
    await consumer.connect().then(()=> console.log('connected kafka'))

    await consumer.subscribe({
      topic: "to-user",
      fromBeginning: true,
    });

    const subscriber = createSubscriber();

    await consumer.run({
      eachMessage: async ({ message }) => {
        const { key, value } = message;

        const subscriberMethod = String(key) as keyof IUserSubscriber;
        const subscriberData = JSON.parse(String(value));

        try {
          await subscriber[subscriberMethod](subscriberData);
        } catch (error: any) {
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
