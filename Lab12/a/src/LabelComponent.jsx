import React from 'react'


  const Label = function(props) {
      return (
       <label labelName={props.labelName}>{props.value}</label> 
      )
  }

  export default Label