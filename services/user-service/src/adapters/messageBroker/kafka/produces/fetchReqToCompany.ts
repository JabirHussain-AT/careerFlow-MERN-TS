import { producer } from "../index";

export default async () => {
  try {
    await producer.connect();
    let message = 'request for fetching the whole company data'
    const messages = [
      {
        topic: "to-company",
        messages: [
          {
            key: "fetchReqtoCompanies",
            value: JSON.stringify(message),
          },
        ],
      },
    ];

    await producer.sendBatch({ topicMessages: messages });

    // Disconnect the Kafka producer after sending the message
    await producer.disconnect();
  } catch (err: unknown ) {
    console.error("Error in sending Kafka message:", err);
    // Handle the error as needed
  } finally {
    await producer.disconnect();
  }
};
