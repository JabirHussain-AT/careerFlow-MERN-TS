import  {ObjectId , Document} from 'mongoose'

export interface IOtp extends Document {
    email: string;
    otp: number;
    createdAt: Date;
}
