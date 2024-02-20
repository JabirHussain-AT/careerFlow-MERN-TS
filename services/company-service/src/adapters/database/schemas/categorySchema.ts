import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
  category: string;
  image?: string;
}

const categorySchema: Schema = new Schema({
  category: {
    type: String,
    required: true, // You can add other validation options as needed
  },
  image: {
    type: String,
  },
});

const CategoryModel = mongoose.model<ICategory>('Category', categorySchema);

export default CategoryModel;
