import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Home = () => {
    return (
        <section className="App" style ={{backgroundImage: "url(images/family.png)"}}>
            <Typography variant='h2'gutterBottom>
                The Emmanuel-kings: Who are They?
            </Typography>
            <Link to = '/NameList' className="btn">
                <Typography variant="h6" gutterBottom>
                    <Button variant="contained"> Click here to get the dirt on the so-called King family</Button>
                </Typography>
            </Link>
        </section>
    );
};
export default Home;

// style ={{backgroundImage: "url(images/family.png)"}}