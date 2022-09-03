import {useLocation} from 'react-router-dom';
import { Link} from "react-router-dom";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export const theme = createTheme({
    typography: {
        fontFamily: '"Helvetica Neue"',
            body1: {
                fontSize: 20
            },
            h4: {
                fontSize: 30
            },
            h2: {
                fontSize: 50
            },
            button: {
                fontStyle: 'italic',
                fontSize: 25
            }
    }
});
function Profile() {
    const location = useLocation();
    let child = location.state
    return (
        <Card > 
            <ThemeProvider theme={theme}>
            <Typography variant='h4' component='div' align="center">
                {child.nomen}: { child.age }
            </Typography>
            <Typography align="center">
                <img src={child.image} className='card-image' alt=''justify="center"/> 
            </Typography>
            <Typography variant='body1'align="center">
                Position in family: { child.position }
            </Typography>
            <Typography variant='body1'align="center">
            Appearance: { child.appearance }
            </Typography>
            <Typography variant='body1'align="center">
            Character: { child.character }
            </Typography>
            <Typography variant='body1'align="center">
            Education: { child.education }
            </Typography>
            <Link to='/NameList'align="center"> 
                <Button> ←Back to list </Button>
                </Link>
            </ThemeProvider>
        </Card>
    );
}  

export default Profile;