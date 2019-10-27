import mongoose from 'mongoose';

interface IDBInput {
  db: string;
}

export default ({ db }: IDBInput) => {
  const connect = () => {
    mongoose
      .connect(db, { useNewUrlParser: true })
      .then(() => {
        // tslint:disable-next-line:no-console
        return console.info(`Successfully connected to ${db}`);
      })
      .catch((err: any) => {
        // tslint:disable-next-line:no-console
        console.error(`Error connecting to database :`, err);

        return process.exit(1);
      });
  };

  connect();

  mongoose.connection.on('disconnected', connect);
};
