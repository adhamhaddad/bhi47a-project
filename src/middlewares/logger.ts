import { Request, Response, NextFunction } from 'express';

// Logger Function
export async function logger(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    console.log(`${req.ip} - ${req.method} ${req.baseUrl}${req.url}`);
    next();
  } catch (err) {
    throw new Error(`Could not log. Error ${err}`);
  }
}