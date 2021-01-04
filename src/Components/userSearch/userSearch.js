
import axios from 'axios'

export const searchUser = (props, username, usernameClicked)=>{
  if(usernameClicked?.spinner){
    props.actionStarted()
  }

  

    let findedUser 

   //checking if  'searchedResults' is already excists in local storage  in case not the value will be empty array
   const  searchedItems =JSON.parse( localStorage.getItem('searchResults')) ?  JSON.parse( localStorage.getItem('searchResults')) :[] 
      
   if(username){ //checking if input not empty

     // adding  searched value at the begginig of searchedItems array 
       searchedItems.unshift({searched: username})

       if(searchedItems.length>3){ //checking if in array more then 3 items, if so we are removing the last one
         searchedItems.pop()
       }  
       //seting array to local storage
       localStorage.setItem('searchResults', JSON.stringify(searchedItems))
     }




    //sending request to find  inputed  username
    //in:user
    axios.get(`https://api.github.com/search/users?q=${username}user:${username}`).then(res=>{
  
      findedUser = res.data.items

 
      return res
      
    })
    .then(res=>{
       
        findedUser.forEach(user=>{
  
          axios.get(user.repos_url).then(response=>{
  
            let threeRepos = []
               //create variable for users first three repos
            
                   if(response.data.length <1){
                      threeRepos =[]
                   }else{
                      threeRepos = response.data.slice(0, 3)
                   }
                   //adding repos property to every object
                   user.repos = threeRepos
   
                       // returning promise object to avoid nested   http requests
                      return response 
                                  
              }).then(()=>{
                  
                //sending request for the finded user organization url
                axios.get(user.organizations_url).then(response=>{
             
                  if(response.data.length <1){
                    
                    user.organizationInfo = [{login: false}]
                    
  
                  }else{
                    user.organizationInfo =  response.data
                  }
               
                  props.searchActivated(res.data.items)
                  if(usernameClicked?.spinner){
                    props.actionEnded()
                  }
                
                  
                  //redirecting to user page
            
                 props.history.push(`/${username}`)
                }).catch(err=>{
                  console.log(err)
                })
              }).catch(error=>{
          console.log(error)
              });
     
            })
    }).catch(err=>{
     
      props.history.push(`/${username}/not_found`)
      
      console.log(err)
    })
  }