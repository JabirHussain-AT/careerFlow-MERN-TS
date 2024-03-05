import express from 'express'
import companyRoutes from './companyRoutes'

export const routes = (dependencies : any) :  any =>{
    
    const  routes = express.Router()
    routes.use('/company',companyRoutes(dependencies))

    return routes
}