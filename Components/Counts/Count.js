import React,{ useState } from "react"
import Button from "../Button/Button";

const Count = () => {
    const[count,setCount]= useState(0);
  return (
    <div className="count">
        <Button value="count" onClick ={() => setCount(count+1)}/>
            <label>
                Count:{count}
            </label>
    </div>
    
  )
}

export default Count