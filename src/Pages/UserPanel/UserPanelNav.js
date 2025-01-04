
import react, {useContext} from 'react';
import "./UserPanel.css";
import { Link } from "react-router-dom";
import userImage from "../../Assets/Images/userImage.jpg"
import { UserContext } from '../../Context/UserContext';



function UserPanelNav() {

    const { username } = useContext(UserContext);

    return (
        <>
            <div className="userpanel-menu">
                <h1>My User Panel</h1>

                <div className="userpanel-image">
                    <img src={userImage} alt="user image" />
                    <p>{username}</p>
                </div>

                <div className="userpanel-nav">
                    <ul>
                        <li><Link to='/UserPanel'><i class="fa fa-dashboard"></i> <p>My Dashboard</p></Link></li>
                        <li><Link to='/UserPanel/PostInfo'><i class='fa fa-info-circle'></i> <p>Post Information</p></Link></li>
                        <li><Link to='/UserPanel/PostPreview'><i class='fa fa-blog'></i> <p>Post Preview</p></Link></li>
                        <li><Link to='/Login'><i class="fa fa-sign-out"></i> <p>Log out</p></Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}


export default UserPanelNav;