
import classes from './main.module.css';
import Content from '../UI/content/content';
import Button from '../UI/Button/button'
import Nav from '../UI/nav/nav';
import UserCard from '../Components/userCard/card';
import SearchBox  from '../Components/SearchBox/search';
import {connect} from 'react-redux';
import { useState, useEffect} from 'react';
// import Spinner from '../UI/spinner/spinner';
import * as action from '../store/actions/index';
import GithubLoader from '../UI/githubLoader/Loader';
import {searchUser} from '../Components/userSearch/userSearch';


function Main(props){
   
 const [listView, setView] = useState(true)
const [submited, setSubmited] = useState(false)
useEffect(() => {
 

  const spinnerTimer= setTimeout(()=>{
     setSubmited(false)
  }, 1500 )
 
  
  return ()=> clearTimeout(spinnerTimer)

}, [submited])

const viewChanged =()=>{ 
 
setView(!listView)  // every button click, style of view changes
}



//excecuting on Submit, when user will search
const userSearchSubmitHandler =(e, username)=>{ 
 e.preventDefault()

setSubmited(true)

 //finding user with imported search function
 if(username){
  searchUser(props, username)
 }



}

//searching with last three searches
const searching =(e, user)=>{
 
searchUser(props, user)
setSubmited(true)
}
const userCards =(
  //mapping every user, which we have in redux store
  props.users.map(obj=>{
   
  
    return <UserCard  key={obj.id} 
    showOrgInfo={false}
    type={obj.type}
    cardSpinner={ listView?  classes.cardSpinner: classes.hide }
    //binding function for redirecting userpage when userName will be clicked
    linkToUserPage={searchUser.bind(this, props, obj.login, {spinner:true})}
    
                               //checking if repos empty or not, and rendering suitable text
       name={obj.login} avatarImg={obj.avatar_url} repos={ obj.repos?.length <1 ? 'empty': obj.repos} />

  })
)
    // )


    return(
       <div>
        
                 
                <Nav />
              {  props.loading?  <GithubLoader/>:    <div>
                <SearchBox searching={submited} userSearched={userSearchSubmitHandler} search={searching} />
           <div className={classes.hideButton} >
               <Button buttonClicked={viewChanged}
            buttonText={listView ? 'turn to grid view':'turn to list view'} viewMode={listView} />
</div> 
                
                <Content viewer ={listView ? classes.listView: classes.gridView}  >
              
             
               { userCards} 
              
               </Content>
               </div>}
            </div>
    );
};
const mapStateToProps = state=>{
    return{
      users: state.users,
      loading: state.loading,
     
    }

    
  }

  const mapDispatchToProps = dispatch =>{
    return{
      searchActivated: (searchedData)=> dispatch(action.userSearched(searchedData)),
      actionStarted: ()=>dispatch(action.actionStarted()),
      actionEnded: ()=> dispatch(action.actionEnded())
 
      
    }
  }

 

export default connect(mapStateToProps, mapDispatchToProps)(Main);



// export default Main;