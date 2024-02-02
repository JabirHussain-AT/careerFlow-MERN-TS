import express from 'express'
import companyRoutes from './companyRoutes'

export const routes = (dependencies : any) :  any =>{
    const  routes = express.Router()
    console.log('in the company index router')
    routes.use('/company',companyRoutes(dependencies))

    return routes
}