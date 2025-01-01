
import react from 'react';
import "./UserPanel.css";
import { Link } from "react-router-dom";
import UserPanelNav from './UserPanelNav';



function UserPanel() {
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
                                <h3>Hello Username!</h3>

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
                                        <Link to='/Login'><i class="fa fa-sign-out"></i>
                                            <p>Log out</p></Link>
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

