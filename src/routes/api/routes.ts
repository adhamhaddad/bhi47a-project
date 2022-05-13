import { Router, Request, Response } from 'express';
import path from 'path';
import { signin, signup } from '../../middlewares/validation';

const router = Router();

const dir: string = path.join(__dirname, '../../../public/html/');

// Home Request
router.get('/home', (req: Request, res: Response): void => {
    res.status(200).sendFile(`${dir}home.html`, (err) => {if (err) console.log(err)});
});

// About Request
router.get('/about', (req: Request, res: Response): void => {
    res.status(200).sendFile(`${dir}about.html`, (err) => {if (err) console.log(err)});
});

// Contact Request
router.get('/contact', (req: Request, res: Response): void => {
    res.status(200).sendFile(`${dir}contact.html`, (err) => {if (err) console.log(err)});
});

// products


// sign up
router.get('/signup', (req: Request, res: Response): void => {
    res.status(200).sendFile(`${dir}signup.html`, (err) => {if (err) console.log(err)});
});
router.post('/signup', signup, (_req: Request, res: Response): void => {
    res.status(201).redirect('http://127.0.0.1:8000/api/signin');
});
// sign in
router.get('/signin', (req: Request, res: Response): void => {
    res.status(200).sendFile(`${dir}signin.html`, (err) => {if (err) console.log(err)});
});
router.post('/signin', signin, (req: Request, res: Response): void => {
    res.status(201).redirect('http://127.0.0.1:8000/api/home');
});

export default router;