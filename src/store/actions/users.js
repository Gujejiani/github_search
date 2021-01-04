import * as actionTypes from './actionTypes'
import axios from 'axios'

export const actionStarted =()=>{
    return{
        type: actionTypes.ACTIONSTARTED
    }
}
export const actionEnded = () =>{
    return{
        type: actionTypes.ACTIONENDED
    }
}

export const sendingUsersToReduxStore = (users) =>{
   
    return{
        type: actionTypes.USERSRESIVED,
        users: users,
        
        
    }
}



//sending information about user
export const userSearched = (userInfo)=>{
     return {
         type: actionTypes.USERSEARCHED,
         userInfo: userInfo

     }
}
 
export const usersResived = ()=>{

return dispatch =>{
  
    
    let usersInfo = [];
  

//getting user Data from api and saving in redux store

    axios.get('https://api.github.com/users').then(response=>{
        usersInfo = response.data;
     dispatch(actionStarted())
        return response   //returning promise to avoid nested http   requests
    }).then(res=>{

    //mapping over for each user object
        usersInfo.forEach(obj=>{
            
        //sendeing request for individual user repositories 
        axios.get(obj.repos_url).then(response=>{
let threeRepos
            //create variable for users first three repos
                if(response.data.length <1){
                    threeRepos =[]
                }else{
                   threeRepos = response.data.slice(0, 3)
                }
                

                //adding repos property to every object
                obj.repos = threeRepos
               
                // checking if the object is last, to avoid multiple times sending unfinished data
                if(res.data.indexOf(obj)  === res.data.length - 1){

                    // sending modified data to our store
                    dispatch(sendingUsersToReduxStore(usersInfo));

                    //to end up sppiner
                  dispatch(actionEnded())
                }
            }).catch(error=>{
        console.log(error)
            });
    
        })
    }).catch(error=>{
        console.log(error.message)
    });
   
    
}

   
    
};