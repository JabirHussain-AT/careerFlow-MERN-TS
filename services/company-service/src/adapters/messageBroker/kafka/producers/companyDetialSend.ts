import { producer } from "../index";

export default async (data: { _id: Object , email: string; role: string; userName: string | any, password : string }) => {
  try {
    await producer.connect();

    const messages = [
      {
        topic: "to-user",
        messages: [
          {
            key: "companyDetailSave",
            value: JSON.stringify(data),
          },
        ],
      },
    ];

    await producer.sendBatch({ topicMessages: messages });

    // Disconnect the Kafka producer after sending the message
    await producer.disconnect();
  } catch (err: any) {
    console.error("Error in sending Kafka message:", err);
    // Handle the error as needed
  } finally {
    await producer.disconnect();
  }
};
