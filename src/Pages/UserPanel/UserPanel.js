
import react, {useContext} from 'react';
import "./UserPanel.css";
import { Link } from "react-router-dom";
import UserPanelNav from './UserPanelNav';
import { UserContext } from '../../Context/UserContext';
import Logout from '../../Components/Logout/Logout';



function UserPanel() {

    const { username } = useContext(UserContext);

    return (
        <>
            <div className="userpanel-page">
                <div className="row">
                    <div className="col-3">
                        <UserPanelNav />
                    </div>

                    <div className="col-9">
                        <div className="userpanel-dashboard">
                            <div className="dashboard-description">
                                <h3>Hello {username}!</h3>

                                <p>Welcome to your user panel. Here you can manage all of your personal information and orders. You can also change your password and delivery address. If you have any questions, please feel free to contact us.</p>
                            </div>

                            <div className="userpanel-content">
                                <div className="row">
                                    <div className="col-4 p-5">
                                        <Link to='/UserPanel/PostInfo'><i class='fas fa-info-circle'></i>
                                            <p>Post Information</p></Link>
                                    </div>

                                    <div className="col-4 p-5">
                                        <Link to='/UserPanel/PostPreview'><i class='fas fa-blog'></i>
                                            <p>Post Preview</p></Link>
                                    </div>

                                    <div className="col-4 p-5">
                                        <Logout />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default UserPanel;

