import React, { useState, useEffect } from 'react';

export default function src({
  marked,
  callback,
  width,
  height,
  borderColor,
  markedColor,
  color
}) {

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
        border: `solid 2px ${ borderColor ?
          borderColor : color ?
          color : "#B4D9CB"
        }`,
        borderRadius: 3,
        background: mark ?
          markedColor ?
            markedColor : color ?
              color : "#BEE6D7"
        : 'white'
      }}

    />

  );
}
