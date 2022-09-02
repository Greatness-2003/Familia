import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className="App">
            <h1>The Emmanuel-kings: Who are They?</h1>
            <Link to = '/NameList' className="btn">Click here to get the dirt on the so-called King family</Link>
        </section>
    );
};
export default Home;
