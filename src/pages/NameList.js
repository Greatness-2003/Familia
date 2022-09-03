import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import '@fontsource/roboto/400.css';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    typography: {
        fontFamily: '"Helvetica Neue"',
            button: {
                fontStyle: 'italic',
                fontSize: 25
            }
        }
});

const family ={
    title: "Emmanuel-king Children: Who Are They?",
    children: {
      "1": {
        "nomen": "Praise",
        "position": "First",
        "age": "24",
        "appearance": "Stout, dark, buff",
        "character": "Loves food, ",
        "education": "Covenant university- Graduated",
        "image": 'images/Praise.png'
      },
      "2": {
        "nomen": "Shalom",
        "position": "Second",
        "age": "23",
        "appearance": "Tall, lean",
        "character": "",
        "education": "University of Benin- Attending",
        "image": 'images/Shalom.png'
      },
      "3": {
        "nomen": "Fortune",
        "position": "Third",
        "age": "21",
        "appearance": "Full hair, tall, lean but buff",
        "character": "Full of himself, smart",
        "education": "Northwestern university- Attending",
        "image": 'images/Fortune.png'
      },
      "4": {
        "nomen": "Greatness",
        "position": "Fourth",
        "age": "19",
        "appearance": "Plump, short-haired, medium-heighted",
        "character": "Sensible",
        "education": "College of William and Mary- Attending",
        "image": 'images/Greatness.png'
      },
      "5": {
        "nomen": "Peculiar",
        "position": "Fifth",
        "age": "18",
        "appearance": "Fatty-bobo, cute",
        "character": "Annoying",
        "education": "African Leadership Academy- Attending",
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
        <ThemeProvider theme={theme}>
        <Typography align='center' >
          <Button onClick={()=>navigate("/Profile", { state: child})} align="center">
            {child.nomen}
          </Button>
        </Typography>
        </ThemeProvider>
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
            <ThemeProvider theme={theme}>
            <Typography align='center' >
            <Button> Back Home </Button>
            </Typography>
            </ThemeProvider>
            </Link> 
        </section>
    );  
};

export default NameList;
