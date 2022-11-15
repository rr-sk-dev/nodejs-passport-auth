import { connect, Mongoose } from 'mongoose';

export class MongoDB {
  private mongoose: Mongoose;

  constructor() {}

  async connect() {
    try {
      this.mongoose = await connect(process.env.MONGO_URI);
    } catch (err) {
      console.log(err);
      throw new Error('Database connection failed.');
    }
  }

  async disconnect() {
    await this.mongoose.disconnect();
  }
}
