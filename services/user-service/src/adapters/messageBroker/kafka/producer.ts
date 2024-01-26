import { producer, broker } from "./connection";

export const userCreatedProducer = async (topic: string, messages: any) => {
    try {
        await producer.connect();
        await producer.send({
            topic,
            messages
        });
    } catch (error: any) {
        console.error('kafka produce error : ', error?.message);
    } finally {
        await producer.disconnect();
    }
};