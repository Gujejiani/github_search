import classes from './userPageCard.module.css'



const userPageCard =(props)=>{

return <div className={classes.Container} >
    <div className={classes.imgInfo_repos_Conteiner} >
      <div className={classes.userInfo} >
         <img className={classes.Img}  src={props.avatarImg} alt="user_Img" />
     
         <a href={props.userPageLink}target="__blank" className={classes.Link}   ><label className={classes.userName} > {props.name}</label></a>  
           <label>type: {props.type}</label>


      </div>
      <div className={classes.ReposInfo} >
            <label>Repositories</label>
            <ul>
            {     
                        props.repos ==='empty'?  <li key={props.repos.name} >Empty</li>: props.repos?.map(obj=>{
                                      
                                           return  <li key={obj.name} >{obj.name }</li>
                                       
                                     
                                       
                                       })
                                   
                               }
            </ul>
       </div>
      </div>
      { props.orgName?   <div className={classes.Organization} >
         <label>Organization</label>
            <img width="30px" className={classes.Img} src={props.organizationImg} alt="organization_Img" ></img>
            <a href={props.orgLink} target="__blank" className={classes.Link}   ><label className={classes.userName} > {props.orgName}</label></a>  

      </div> : <label>Organization not found</label> }
</div>

}
export default userPageCard