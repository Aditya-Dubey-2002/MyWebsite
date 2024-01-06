import "./pagestart.css";

function StartPage(props) {
    return (<div className="page-box">
      <div className="page-start" style={{ textAlign: 'center' }}>
        <h3 className="start-head">
          {props.first}
        </h3>
        <h3 className="start-subhead">
          {props.second}
        </h3>
        
      </div>
      
      </div>
    );
  }
  
  export default StartPage;
  