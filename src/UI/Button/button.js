import classes from './button.module.css';


const button =(props)=>{
    return <button onClick={props.buttonClicked}  className={`${classes.button} ${props.viewMode ? classes.list: classes.grid}`} type="button" >{props.buttonText}</button>
}

export default button