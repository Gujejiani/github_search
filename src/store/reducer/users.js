import * as actionTypes from '../actions/actionTypes'
const initialState ={
    users:[],
    loading: false,
    users: [],
    searchedUser: null,
   
    
}


const reducer = (state=initialState, action)=>{

    switch (action.type) {
        case actionTypes.ACTIONSTARTED:
            
                return{
                    ...state,
                    loading: true,
                    
                    
                } 
        case actionTypes.ACTIONENDED:
           
                return{
                    ...state,
                    loading: false,
                    searchingSpinner: false
                }
            
           case actionTypes.USERSRESIVED:
               
               return{
                   ...state,
                   users: action.users,
                    loading: false

               }
               case actionTypes.USERSEARCHED:
                   return{
                       ...state,
                       
                       searchedUser: action.userInfo

                   }
    
        default:
            return state
    }

}

export default reducer