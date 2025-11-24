import { model, models, Schema } from "mongoose";

export interface IUser {
  username: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<IUser>({
  username: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});


export default models.User || model<IUser>("User", UserSchema)