import { connect, Mongoose } from 'mongoose';

let mongoose: Mongoose;

export const connectToDatabase = async () => {
  try {
    mongoose = await connect(process.env.MONGO_URI);
  } catch (err) {
    console.log('[ERROR] Connecting to the database', err);

    return Promise.reject(err);
  }
};

export const disconnectFromDatabase = async () => {
  await mongoose.disconnect();
};
