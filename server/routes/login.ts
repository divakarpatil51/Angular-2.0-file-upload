import { Router, Response, Request } from 'express';

const loginRouter: Router = Router();

loginRouter.get('/simple', (request: Request, response: Response) => {
  response.json({
    title: 'Greetings.',
    text: 'Hello Angular 2'
  });
});

export { loginRouter }