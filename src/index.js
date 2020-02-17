import React, { useState, useEffect } from 'react';

export default function src({marked, callback, width, height}) {

  const [ mark, setMark ] = useState(marked)
  
  if(callback){
    useEffect(()=>{
      callback(mark)
    },[mark])
  }

  return (
    <div

      onClick={()=>{
        setMark(!mark)
      }}

      style={{
        minWidth: 10,
        minHeight: 10,
        width: width ? width : 20,
        height: height ? height : 20,
        border: 'solid 2px #B4D9CB',
        borderRadius: 3,
        background: mark ? "#BEE6D7" : 'white'
      }}
    
    />

  );
}
