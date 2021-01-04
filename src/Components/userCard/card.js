import classes from './card.module.css'



const Card = (props)=>{



  
   
    return(
    <div className={classes.userCard} >
        
  
        <div className={classes.flexItems} >
        <img src={props.avatarImg} className={classes.AvatarImg} alt="userImg"/>
        <div className={classes.Link  } onClick={props.linkToUserPage}    >  {props.name}  </div>
        <p> type: {props.type}</p>
        </div>
      
          <div className={classes.cardContent} >  
              <h3> Repositories</h3>   
                  <ul>
                    
                    {
                        
             props.repos ==='empty'?  <li key={props.repos.name} >Empty</li>: props.repos?.map(obj=>{
                           
                                return  <li key={obj.name} >{obj.name }</li>
                            
                          
                            
                            })
                        
                    }
                        
                     
                      
                      
                  </ul>
                
              </div>  
         
      
    </div>
    )
}


export default   Card