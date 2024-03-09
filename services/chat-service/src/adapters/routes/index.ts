import express from 'express'
import chatRoomRoutes from './chatRoomRoutes'
import messageRoutes from './messageRoutes'
import userRoutes from './userRoutes'

export const routes = (dependencies : any) :  any =>{
    const  routes = express.Router()
    routes.use('/room',chatRoomRoutes(dependencies))
    routes.use('/user',userRoutes(dependencies))
    routes.use('/message',messageRoutes(dependencies))
    return routes
}