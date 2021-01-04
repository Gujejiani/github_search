import classes from './content.module.css'


const content =(props)=>{

    return (
        <div className={`${classes.Content} ${props.viewer}` } >
                {props.children}
        </div>
    )
}
export default content