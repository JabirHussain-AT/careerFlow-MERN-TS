import fetchUsersController  from './fetchUsers'


export = (dependencies : any ) =>{
    return {
        fetchUsersController : fetchUsersController(dependencies),
    }
}