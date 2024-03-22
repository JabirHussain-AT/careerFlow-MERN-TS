import express from 'express'
import companyRoutes from './companyRoutes'
import { IDependencies } from '../../entities/Interfaces/ICompanyInterface'

export const routes = (dependencies : IDependencies )  =>{
    
    const  routes = express.Router()
    routes.use('/company',companyRoutes(dependencies))

    return routes
}