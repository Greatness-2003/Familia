import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import '@fontsource/roboto/400.css';

const family ={
    title: "Emmanuel-king Children: Who Are They?",
    children: {
      "1": {
        "nomen": "Praise",
        "position": "First",
        "age": "24",
        "appearance": "Stout, dark, buff",
        "character": "Loves food, ",
        "education": "College: Graduated",
        "image": 'images/Praise.png'
      },
      "2": {
        "nomen": "Shalom",
        "position": "Second",
        "age": "23",
        "appearance": "Tall, lean",
        "character": "",
        "education": "College: Attending",
        "image": 'images/Shalom.png'
      },
      "3": {
        "nomen": "Fortune",
        "position": "Third",
        "age": "21",
        "appearance": "Full hair, tall, lean but buff",
        "character": "Full of himself, smart",
        "education": "College: Attending",
        "image": 'images/Fortune.png'
      },
      "4": {
        "nomen": "Greatness",
        "position": "Fourth",
        "age": "19",
        "appearance": "Plump, short-haired, medium-heighted",
        "character": "Sensible",
        "education": "College: Attending",
        "image": 'images/Greatness.png'
      },
      "5": {
        "nomen": "Peculiar",
        "position": "Fifth",
        "age": "18",
        "appearance": "Fatty-bobo, cute",
        "character": "Annoying",
        "education": "A-level: Attending",
        "image": 'images/Peculiar.png'
      }
    }
  };

const ChildrenButton = ({ children }) => {
    let navigate = useNavigate();
    
    return(
      Object.values(children).map(child => 
        <>
        <div>
          <Button onClick={()=>navigate("/Profile", { state: child})}>
            {child.nomen}
          </Button>
        </div>
        </>
      )
    );
}

const NameList = () => {
    return (
        <section>
            <ChildrenButton children ={family.children}/>
            <Link to='/' className="btn">
            <Button> Back Home </Button> </Link>
        </section>
    );  
};

export default NameList;
