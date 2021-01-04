import classes from './UserPage.module.css';
import Nav from '../../UI/nav/nav';
import Content from '../../UI/content/content';
import {connect} from 'react-redux'
import UserPageCard from '../../Components/userPageCard/userPageCard';



const UserPage = (props)=>{


    const searchedCard =(
        //mapping every user, which we have in redux store
     
        props.userData?.map(obj=>{
      
          return  <UserPageCard key={obj.id} 
          type={obj.type}
           userLink ={obj.html_url}
                                 //checking if repos empty or not, and rendering suitable text
             name={obj.login} avatarImg={obj.avatar_url} repos={ obj.repos?.length <1 ? 'empty': obj.repos} 
             organizationImg = {obj.organizationInfo[0].avatar_url}
             orgName={obj.organizationInfo[0].login}
             userPageLink={`https://github.com/${obj.login}`}
             orgLink={`https://github.com/${obj.organizationInfo[0].login}`}
             />
            
        })
      )

    return <div className={classes.Container} >
        <Nav linkToMain={'Main Page'} />

        <Content viewer={classes.ContentContainer} >
        {searchedCard}
        </Content>
       
    </div>
}


const mapStateToProps = state =>{
    return{
        userData: state.searchedUser
    }
}


export default connect(mapStateToProps)(UserPage)