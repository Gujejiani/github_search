import classes from './search.module.css'
import React, {useState} from 'react';
import Spinner from '../../UI/searchSpinner/spinner'


const Search = (props) =>{

    //saveing input value
    const [search, setSearch] = useState('')
    

     //maneaging show or not last three searched results
    const [searchedUsers, showSearchedUsers]=useState(false)

let  searched =   JSON.parse( localStorage.getItem('searchResults')) ?  JSON.parse( localStorage.getItem('searchResults')) :[]


//onBlur  function
function setSearchItems(e, username){
  
    setSearch(username.searched)
    showSearchedUsers(false)
}

const searchedList = (
 

    searched.map(user=>{
        return  <li key={user.searched + Math.random() } onClick={(e)=>{setSearchItems(e, user)}}
         className={classes.SearchedUsers} > {user.searched} </li>
    })
    )

    return <div className={classes.search_Parrent}  >
        <form  onSubmit={(e)=>props.userSearched(e, search)}  className={classes.Form} >
     <div className={classes.input_and_search} >
    <div className={classes.searchingSpinner}  >  <Spinner show={props.searching? true : false}  /></div>  
          <input 
          onFocus={()=>showSearchedUsers(true)  } 
         onBlur={()=>{
             //saveing time to get input data, before bluring
          setTimeout(()=>{
                showSearchedUsers(false)
            }, 150)
            
            }} 
          value={search}
           onChange={(e)=>setSearch(e.target.value)}
            className={classes.Search} 
        placeholder='Search github users ...' >
            </input>
            <button onChange={(e)=>setSearch(e.target.value)} className={classes.SubmitSearch}  type="submit" >Search</button>
            </div>  
            <ul className={`${classes.Searched}  ${searchedUsers? classes.show : classes.hide}`} >
              {searchedList}
            </ul>
            </form>
            </div>  
}


export default  Search