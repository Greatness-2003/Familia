import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    typography: {
        fontFamily: '"Helvetica Neue"',
            button: {
                fontStyle: 'italic'
            },
            h6: {
                fontSize: 250
            },
            h2: {
                fontSize: 70
            }
    }
});

const Home = () => {
    return (
        <div className="App" style ={{backgroundImage: "url(images/family.png)"}}>
            <ThemeProvider theme={theme}>
            <Typography variant='h2'gutterBottom align='center'>
                The Emmanuel-kings: Who are They?
            </Typography>
            <Link to = '/NameList' className="btn">
                <Typography variant="h6" gutterBottom>
                    <Button variant="contained" align='center'> Click here to get the dirt on the so-called King family</Button>
                </Typography>
            </Link>
            </ThemeProvider>
        </div>
    );
};
export default Home;
