import express from 'express'
import userRoutes from './userRoutes'
import adminRoutes from './adminRoutes'
import { IDependencies } from '../../entities/intrefaces/IUserInterfaces'

export const routes = (dependencies : IDependencies)  => {
    const  routes = express.Router()
    routes.use('/user',userRoutes(dependencies))
    routes.use('/admin',adminRoutes(dependencies))
    return routes
}