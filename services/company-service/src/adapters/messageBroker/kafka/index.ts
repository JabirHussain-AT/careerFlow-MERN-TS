import { Kafka , Producer , Consumer } from "kafkajs";

// export const kafka = new Kafka({
//     clientId : 'user-client',
//     brokers : ["kafka:9093"]
// })

export const kafka = new Kafka({
    clientId :process.env.KAFKA_CLIENT_ID ,
    brokers : [process.env.KAFKA_BOOTSTRAP_SERVER],
    ssl: true,
    sasl: {
        username: process.env.KAFKA_USERNAME ,
        password: process.env.KAFKA_PASSWORD ,
        mechanism: 'plain'
    },
    authenticationTimeout: 45000
})


console.log('iam here ==== in kafka')

export const producer: Producer = kafka.producer();
export const consumer: Consumer = kafka.consumer({
    groupId: "company-service-kafka-group",
});