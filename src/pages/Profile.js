import {useLocation} from 'react-router-dom';
import { useState } from "react";
import { Link} from "react-router-dom";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const InlineEdit = ({ value, setValue }) => {
    const onChange = (event) => setValue(event.target.value);
    const onKeyDown = (event) => {
        if (event.key === "Enter" || event.key === "Escape") {
          event.target.blur();
        }
    };
    return (
      <input
        type="text"
        aria-label="Field name"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    );
}

function Profile() {
    const [value, setValue] = useState();
    const location = useLocation();
    let child = location.state
    return (
        <Card>
          <Typography variant='h4' component='div'>
            {child.nomen}: { child.age }
          </Typography>
          <Typography variant='body1'>
            { child.position }
          </Typography>
          <Typography variant='body1'>
          { child.appearance }
          </Typography>
          <InlineEdit value={value} setValue={setValue} />
          <Typography variant='body1'>
          { child.character }
          </Typography>
          <Typography variant='body1'>
          { child.education }
          </Typography>
          <img src={child.image} className='card-image' alt=''/>
          <Link to='/NameList'> 
            <Button> Back to list </Button>
            </Link>
        </Card>
    );
}  

export default Profile;

{/* <div className="card m-1 p-2">
<div className="card-body">
    <div className="card-title">{child.nomen}: { child.age }</div>
    <div className="card-text"> { child.position }</div>
    <div className="card-text"> { child.appearance }</div>
    <InlineEdit value={value} setValue={setValue} />
    <div className="card-text"> { child.character }</div>
    <div className="card-text"> { child.education }</div>
    <img src={child.image} className='card-image' alt=''/>
    <Link to='/NameList' className="btn"> Back to list </Link>
</div>
</div> */}