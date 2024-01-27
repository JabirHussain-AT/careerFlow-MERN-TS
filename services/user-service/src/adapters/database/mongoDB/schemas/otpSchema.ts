import mongoose, { Schema, Document } from 'mongoose';
import { IOtp } from '../../../../entities/otpEntity';

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
        required: true,
    },
}, {
    expires: 120, // expiry time is set to 2 minutes
});


export default  mongoose.model<IOtp & Document>('Otp', otpSchema);


export interface IOtpDoc {
    email : string,
    otp : number ,
    createdAt :Date ,
}
