import dotenv from 'dotenv'
import http from 'http'
dotenv.config()
import express , {Express, Request , Response} from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import { routes } from './adapters/routes'
import dependencies from './utils/config/dependencies'
import errHandler from './utils/errorHandlers/errorHandler'
import connectSocketIo from './infra-socket/connection'
import color from 'colors'



const app : Express = express()
const PORT : number = Number(process.env.PORT) 

app.use(express.json())
app.use(cookieParser())



app.use(cors({
  origin: process.env.FRONT_END_URL, // Replace with the actual origin of your frontend
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true,
}));



app.use(session({
    secret : String(process.env.SESSION_SECRET),
    resave : true, 
    saveUninitialized : true
}))


app.use('/api/chat',routes(dependencies))

app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, status: 404, message: "Api Not found" });
});

const server = http.createServer(app)

app.use(errHandler);

server.listen( PORT, () => {
  console.log(color.green(`chat service starte successfully at the port ${PORT}`));
})

connectSocketIo(server)

export default app