import express, { Application } from 'express';
import helmet from 'helmet';
import handler from './routes/handler';

// Express App
const app: Application = express();
const port: number = 8000;

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

// App Requests
app.use('/', handler);

// Express Server
app.listen(port, () => console.log(`Server Listening on http://127.0.0.1:${port} 😄`));