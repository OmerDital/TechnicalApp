import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port = 4000 || process.env.PORT;
app.get('/', (req: Request, res: Response) => {
  res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, err => {
  if (err) {
    // tslint:disable-next-line:no-console
    return console.error(err);
  }
  // tslint:disable-next-line:no-console
  return console.log(`server is listening on ${port}`);
});
