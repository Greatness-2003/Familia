import {useLocation} from 'react-router-dom';

 function Profile() {

    const location = useLocation();
    let child = location.state
    return (

        <div className="card m-1 p-2">
            <div className="card-body">
                <div className="card-title">{child.nomen}: { child.age }</div>
                <div className="card-text"> { child.position }</div>
                <div className="card-text"> { child.appearance }</div>
                <div className="card-text"> { child.character }</div>
                <div className="card-text"> { child.education }</div>
            </div>
        </div> 
    );
}  

export default Profile;