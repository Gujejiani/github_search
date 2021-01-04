
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Mainpage from './Container/Main'
import React, {useEffect} from 'react'
import * as action  from './store/actions/index'
import {connect} from 'react-redux'
import userPage from './Container/UserPage/UserPage'
import notFound from './Components/not_found/error'

function App(props) {


  useEffect(()=>{
    //this.props.fetchingDataStared
props.fetchingDataStarted()
props.sendingRequest()
}, )


  return (

    <div className="App">
     <Switch>
        <Route exact path="/:username" component={userPage} />
        <Route path="/:username/not_found" component={notFound} />
      <Route component={Mainpage} />
      
      </Switch>
      {/* <Mainpage/> */}

    </div>
   
  );
}

const mapDispatchToProps = dispatch =>{
return{

  sendingRequest: ()=> dispatch(action.usersResived()),
  fetchingDataStarted: ()=>dispatch(action.actionStarted())
}

   
}
export default connect(null, mapDispatchToProps)(App);
