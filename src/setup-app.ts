import express, { Express, Request, Response } from 'express';


export const setupApp = (app: Express) => {

  app.use(express.json());

  // Health-check: простой ответ, что сервер жив.
  app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Hello world!');
  });


  return app;
};
