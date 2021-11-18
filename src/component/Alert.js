import React from 'react'

const Alert = (props) => {
    return (
       props.alert && 
       <div className="container" style={{marginTop:"30px"}}>
      <div className={`alert alert-${props.alert.type}  fade show `} role="alert">
        <strong>{props.alert.msg}</strong>
      </div>
      </div>
    );
}

export default Alert
