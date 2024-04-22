function FormGroup(props){
    console.log("prop", props)
    return(
        <div>
            <label htlmfor={props.id} className={props.className}>
               {props.labelTxt}
            </label>
            <input id={props.id} type="text" placeholder={props.placeholder}></input>
        </div>
    )
}

export default FormGroup