import * as React from 'react'

import { Paper, Button } from '@mui/material'

const ChoosePronounCard = (props) => {
  return (
    <>
        <div className="summary-delivery-card">
          <img src={props.img}></img>
        </div>
      
      <div className="flex-col">
        <Button
          variant="contained"
          size="small"
          style={{
            'background-color': 'black',
            'border-radius': '30px',
            padding: '8px 45px',
            'font-weight': 'bold',
            'font-size': '0.7em',
            width: 'fit-content',
            top: '-1.2em',
          }}
        >
          {props.name}
        </Button>
      </div>
    </>
  )
}

export default ChoosePronounCard
