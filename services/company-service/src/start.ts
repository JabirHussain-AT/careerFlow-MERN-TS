import dotenv from 'dotenv'
dotenv.config()
import express , {Express, Request , Response} from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import color from 'colors'
import dependencies from './util/config/dependencies'
import { routes } from './adapters/router'
import errHandler from './util/errorHandlers/errorHandler'
import scheduleJobUpdate  from './util/cronJob/forCheckingExpiry'


const app : Express = express()
const PORT : number = Number(process.env.PORT) || 3003

app.use(express.json())
app.use(cookieParser())
scheduleJobUpdate()

app.use(cors({
  origin: process.env.FRONT_END_URL,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true
}));

app.use(session({
    secret : String(process.env.SESSION_SECRET),
    resave : true, 
    saveUninitialized : true
}))


app.use('/api/users',routes(dependencies))

app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, status: 404, message: "Api Not found" });
});

app.use(errHandler);

app.listen( PORT, () => {
  console.log(color.green(`company-service is listening at the port ${PORT}`));
})

export default app