import { Kafka, Producer, Consumer } from "kafkajs";

export const broker = new Kafka({
    clientId: "my-client-id", 
    brokers: ["localhost:909"]
});
console.log('iam here ==== in kafka')

export const producer: Producer = broker.producer();
export const consumer: Consumer = broker.consumer({ groupId: "user-service-group" });

