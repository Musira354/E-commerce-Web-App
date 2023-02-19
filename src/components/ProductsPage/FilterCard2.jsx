import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

 const NestedList = (props) => {
  const [open, setOpen] = React.useState(true);
  

  const handleClick = () => {
    setOpen(!open);
  };
  

  return (
    <div className="collapsible">
        <div className="header" >
            <div class='title'>{props.title}</div>
            <ExpandMore onClick={()=>setOpen(!open)}
            aria-controls="collapse"
            />
        </div>
        <Collapse in={open}>
            <div class='content Show' id="collapse" style={{'padding':'14px',
            'background-color': 'white',
            'min-width': '100%',
            }}>
                {props.children}
            </div>
        </Collapse>
    </div>
  );
}

export default NestedList;