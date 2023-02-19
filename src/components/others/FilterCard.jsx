import React from 'react'
import Card from 'react-bootstrap/Card';

//use colapse of react bootstrap
const filterCard= (props)=> {
  return (
    <div>
      <Card style={{ width: '18rem', height:'4em', 'margin-bottom': '.8em'}}>
        <Card.Body style={{display: 'flex'}}>
          <Card.Title className='cardTitle' >{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
          <Card.Text>
            {props.text}
          </Card.Text>
          <div>{props.children}</div>
        </Card.Body>
      </Card>
    </div>
    
  )
}

export default filterCard