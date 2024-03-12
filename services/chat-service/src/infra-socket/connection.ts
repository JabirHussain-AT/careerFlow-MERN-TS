import { Server as SocketIOServer, Socket } from "socket.io";
import { Server } from "http";
import { handleSocketEvents } from "./events";


let io: SocketIOServer; // Declare io outside the function to make it a shared instance
let onlineUsers: { userId: string; socketId: string }[] = [];

const connectSocketIo = (server: Server) => {
  if (!io) {
    io = new SocketIOServer(server, {
      cors: {
        origin: process.env.FRONT_END_URL,
      },
    });

    io.on("connection", (socket: Socket) => {
      socket.on("join-user-room", (userId: string) => {
        onlineUsers = onlineUsers.filter((user) => {
          return user.userId !== userId;
        });

        // socket.join(userId);
        onlineUsers.push({ userId: userId, socketId: socket.id });
        io.emit("online-users", onlineUsers);
      });

      socket.on("send-message", async (data: any) => {
        const receiver = onlineUsers.find(
          (user) => user.userId === data.receiverId
        );



        if (receiver) {
          io.to(receiver.socketId).emit("new-message", data);
        }
        const sender = onlineUsers.find(
          (user) => user.userId === data.senderId
        );

        // if (sender) {
        //     const message = data.content
        //     io.to(sender?.socketId).emit("new-message",message);
        // }

        // console.log('onlineUsers after sending message:', onlineUsers);
      });

      socket.on("status-check", ({ receiverId, senderId }) => {
        const result = onlineUsers.some((user) => user.userId === receiverId);
        const sender = onlineUsers.find((user) => user.userId === senderId);
        io.to(sender?.socketId).emit("statusCheck-result", { status: result });
      });

      socket.on(
        "typing",
        ({
          chatRoomId,
          senderId,
        }: {
          chatRoomId: string;
          senderId: string;
        }) => {
          socket.in(chatRoomId).emit("typing", { chatRoomId, senderId });
        }
      );

      // Event for handling disconnections
      socket.on("disconnect", () => {
        const disconnectedUserId = onlineUsers.find(
          (user) => user.socketId === socket.id
        )?.userId;

        if (disconnectedUserId) {
          console.log(`Socket disconnected for user ID: ${disconnectedUserId}`);
          onlineUsers = onlineUsers.filter(
            (user) => user.userId !== disconnectedUserId
          );
          io.emit("online-users", onlineUsers);
        } else {
          console.log("Socket disconnected");
        }
      });
    });
  }
};

export default connectSocketIo;
