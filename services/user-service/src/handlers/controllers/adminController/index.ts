import fetchUsersController  from './fetchUsers'
import changeUserBlockStatusController from './changeUserBlockStatus'


export = (dependencies : any ) =>{
    return {
        fetchUsersController : fetchUsersController(dependencies),
        changeUserBlockStatusController : changeUserBlockStatusController(dependencies)
    }
}