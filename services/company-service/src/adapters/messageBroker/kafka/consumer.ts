import { consumer, broker } from "./connection";

export const userCreatedConsumer = async (topic: string, messages: any) => {
    try {
        await consumer.connect();
        await consumer.subscribe({
            topic
        });
    } catch (error: any) {
        console.error('kafka c error : ', error?.message);
    } finally {
        await consumer.disconnect();
    }
};