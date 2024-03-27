import { Kafka , Producer , Consumer } from "kafkajs";

export const kafka = new Kafka({
    clientId : 'user-client',
    brokers : ["kafka:9093"]
})

export const producer: Producer = kafka.producer();
export const consumer: Consumer = kafka.consumer({
    groupId: "chat-service-kafka-group",
});