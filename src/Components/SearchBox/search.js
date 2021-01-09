import classes from './search.module.css'
import React, {useState} from 'react';
import Spinner from '../../UI/searchSpinner/spinner'


const Search = (props) =>{

    //saveing input value
    const [search, setSearch] = useState('')

   
    
 
    //  //maneaging show or not last three searched results
     const [searchedUsers, showSearchedUsers]=useState(false)

let  searched =   JSON.parse( localStorage.getItem('searchResults')) ?  JSON.parse( localStorage.getItem('searchResults')) :[]








const searchUsingLastSearchs =(e, username, mode)=>{
   
    setSearch(username)
    props.search(e, username)
    showSearchedUsers(false)
}

const submitHandler =(e, search)=>{
    props.userSearched(e, search)
    showSearchedUsers(false)
}

const searchedList = (
 

    searched.map(user=>{
        return  <li key={user.searched + Math.random() } onClick={(e)=>{searchUsingLastSearchs(e, user.searched)}}
         className={classes.SearchedUsers} > {user.searched} </li>
    })
    )

    return <div className={classes.search_Parrent}  >
        <form  onSubmit={(e)=>submitHandler(e, search)}  className={classes.Form} >
     <div className={classes.input_and_search} >
    <div className={classes.searchingSpinner}  >  <Spinner show={props.searching? true : false}  /></div>  
          <input 
          onFocus={()=>showSearchedUsers(true)  } 
         onBlur={()=>{
             //saveing time to get input data, before bluring
          setTimeout(()=>{
                showSearchedUsers(false)
            }, 120)
            
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