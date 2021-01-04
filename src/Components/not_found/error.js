import Button from '../../UI/Button/button';
import classes from './error.module.css'
import {Link} from 'react-router-dom'

const notFound =()=>{
    return <div className={classes.Container} >
        <span>Not Found</span>
      <Link className={classes.Link} to="/" ><Button buttonText={'back to Main page'} /></Link>  
    </div>
}

export default notFound