function CardTest(props) {
    return (
        <div className="card">
            <div className="card-body">
        <img src={props.src} alt={props.alt} className="card-image"/>
        
            <h4 className="card-title">CardTest titolo</h4>
            <p className="card-text">CardTest paragrafo</p>
            <button className="card-button">CardTest button</button>
        </div>
    </div>
    );
  }
  
  export default CardTest;