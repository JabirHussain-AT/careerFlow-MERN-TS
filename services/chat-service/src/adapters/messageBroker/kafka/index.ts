import { Kafka , Producer , Consumer } from "kafkajs";

export const kafka = new Kafka({
    clientId : 'user-client',
    brokers : ["localhost:9092"]
})

console.log('iam here ==== in kafka chat service ')

export const producer: Producer = kafka.producer();
export const consumer: Consumer = kafka.consumer({
    groupId: "chat-service-kafka-group",
});