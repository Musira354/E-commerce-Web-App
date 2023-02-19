import React from 'react'
import Checkbox from '@mui/material/Checkbox';



const TypeCheckBox = (props) => {

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

  return (
    <div>
        <div class='contentList'>
        <Checkbox
        color='default'
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
        />
        <span class='typeItem'>{props.type}</span>
        <span class='numberOfItems'>{'('+props.typeNumber+')'}</span>
        </div>
    </div>
  )
}

export default TypeCheckBox