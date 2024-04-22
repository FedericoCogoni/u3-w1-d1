function ButtonComponent(props){
    console.log("prop", props)
    return(
        <div>
            <button type="button">{props.buttonName}</button>
        </div>
    )
}

export default ButtonComponent