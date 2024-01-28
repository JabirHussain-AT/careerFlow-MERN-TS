import dotenv from 'dotenv'
dotenv.config()
import express , {Express, Request , Response} from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import dependencies from './util/config/dependencies'
import { routes } from './adapters/routes'
import errHandler from './util/errorHandlers/errorHandler'



const app : Express = express()
const PORT : number = Number(process.env.PORT) || 3002

app.use(express.json())
app.use(cookieParser())

console.log(process.env.FRONT_END_URL)

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

app.get('/',(req : Request,res : Response)=>{
  res.send("ok till here index ")
})  

app.use('/api/users',routes(dependencies))

app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, status: 404, message: "Api Not found" });
});

app.use(errHandler);

app.listen( PORT, () => {
  console.log(`users-service is listening at the port ${PORT}`);
})

export default app