import mongoose, { Schema, Document } from 'mongoose';

interface IChatroom extends Document {
    roomCreater: Schema.Types.ObjectId; // Company ID
    roomJoiner: Schema.Types.ObjectId; // Applicant ID
    lastMessage: string;
    createdAt: Date;
    updatedAt: Date;
}

const ChatRoomSchema: Schema<IChatroom> = new Schema({
    roomCreater: {
        type: Schema.Types.ObjectId,
        required: true,

    },
    roomJoiner: {
        type: Schema.Types.ObjectId,
        required: true,

    },
    lastMessage: {
        messagePersone : { type : String },
        message : { String }
    }
}, {
    timestamps: true
});

const ChatRoomCollection = mongoose.model<IChatroom>('chatrooms', ChatRoomSchema);

export default ChatRoomCollection;

export interface ChatRoomDocument extends IChatroom {
    createdAt: Date;
    updatedAt: Date;
}