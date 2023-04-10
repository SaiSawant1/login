import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const FormControl = ({type,placeholder,icon,setInput}) => {
  
    const handleChange=(e)=>{
        setInput(e.target.value);
    }
    return (
    <div className="form-control">
        <div className="input-logo">
            <FontAwesomeIcon icon={icon} />
        </div>
        <input onChange={handleChange} type={type} name={type} id="" placeholder={placeholder} />
      </div>
  )
}

export default FormControl
