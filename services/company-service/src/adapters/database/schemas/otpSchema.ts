import mongoose, { Schema, Document } from 'mongoose';
import { IOtp } from '../../../entities/otpEntitiy';

const otpSchema: Schema = new Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 120, // Set the expiration time to 2 minutes (in seconds)
    },
});

export default mongoose.model<IOtp & Document>('Otp', otpSchema);


export interface IOtpDoc {
    email : string,
    otp : number ,
    createdAt :Date ,
}
