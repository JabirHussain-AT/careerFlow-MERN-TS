import fetchUsersController  from './fetchUsers'
import changeUserBlockStatusController from './changeUserBlockStatus'
import { IDependencies } from '../../../entities/intrefaces/IUserInterfaces'


export = (dependencies : IDependencies  ) =>{
    return {
        fetchUsersController : fetchUsersController(dependencies),
        changeUserBlockStatusController : changeUserBlockStatusController(dependencies)
    }
}