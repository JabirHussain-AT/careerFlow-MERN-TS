import express from 'express'
import userRoutes from './userRoutes'

export const routes = (dependencies : any) :  any =>{
    const  routes = express.Router()
    routes.use('/user',userRoutes(dependencies))
    return routes
}