import React from 'react';

//Default style for select
import './CSelect.scss';

export default function CSelect({className, option, current, handleChange}) {
    return(
    <select className={className} value={current} onChange={e => handleChange(e.target.value)} >    
        { option.map(value =>
            <option value={value} key={value}> {value} </option>
        )}
    </select>
    )
}