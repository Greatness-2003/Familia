import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import '@fontsource/roboto/400.css';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useData } from "../firebase";

const theme = createTheme({
    typography: {
        fontFamily: '"Helvetica Neue"',
            button: {
                fontStyle: 'italic',
                fontSize: 25
            }
        }
});

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
  const [family, loading, error] = useData('/')
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the information...</h1>
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
