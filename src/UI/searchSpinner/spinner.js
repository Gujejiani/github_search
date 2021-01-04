import classes from './spinner.module.css'


const spinner = (props)=>{
    return <div className={`${classes.Loader} ${props.show? classes.show: classes.hide }`}>Loading...</div>
}


export default spinner