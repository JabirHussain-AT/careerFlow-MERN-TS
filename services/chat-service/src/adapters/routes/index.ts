import express from 'express'
import chatRoomRoutes from './chatRoomRoutes'
import messageRoutes from './messageRoutes'
import { IDependencies } from '../../entities/interfaces/IChatInterface'

export const routes = (dependencies : IDependencies )  =>{
    
    const  routes = express.Router()
    routes.use('/room',chatRoomRoutes(dependencies))
    routes.use('/message',messageRoutes(dependencies))
    return routes
}