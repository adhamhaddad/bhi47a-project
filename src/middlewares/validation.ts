import { Request, Response, NextFunction } from 'express';
// Form SignUp
export async function signup(req: Request, res: Response, next: NextFunction) {
  try {
    const name = await req.body.username;
    const email = await req.body.email;
    const pass = await req.body.pass;
    console.log(name, email, pass);
    next();
  } catch (err) {
    throw new Error(`Could not sign up. Error ${err}`);
  }
}

// Form SignIn
export async function signin(req: Request, res: Response, next: NextFunction) {
  try {
    const name = await req.body.username;
    const pass = await req.body.pass;
    console.log(name, pass);
    next();
  } catch (err) {
    throw new Error(`Could not sign in. Error ${err}`);
  }
}
