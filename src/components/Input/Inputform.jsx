import React, { useState } from 'react'

const Inputform = ({placeholder, value, setValue, valid, setValid, feedback, regex, type}) => {
  const [fb, setfb] = useState("d-none");
  const handle = e => {
    const newValue = e.target.value;
    setValue(newValue);

    const idRegex = regex;
    if (newValue.length === 0) { setValid(""); setfb("d-none"); }
    else if (!idRegex.test(newValue)) { setValid("is-invalid"); setfb(""); }
    else { setValid("is-valid"); setfb("d-none");}
  }

  return (
    <div className='w-100 check-box flex-wrap mb-2'>
      <input type={type} placeholder={placeholder} className={`form-control ${valid} form-input`} required
        value={value} onChange={handle} />
      <span className={`${fb}`}>{feedback}</span>
    </div>
  )
}

export default Inputform