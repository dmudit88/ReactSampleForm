import React, { useEffect, useState } from "react";
var store = require('store')

export default function Schedule() {
  const [value, setValue] = useState(
    store.get("myValueInLocalStorage") || []
  );

  useEffect(() => {
      console.log("hiiiiiiii");
    var temp = value;
    // console.log(Object.keys(temp));
    // console.log(Object.values(temp));
    temp.reverse();
      setValue(temp);
  },[value]);

  return(
      <React.Fragment>
        {value.map(item => {
          return <div>{JSON.stringify(item)}</div>
        })}
        
      </React.Fragment>
  );
}
