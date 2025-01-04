
import React, {useContext} from "react";
import { UserContext } from "../../Context/UserContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";




function Logout() {

    const { setUsername, setEmail } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setUsername('');
        setEmail('');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        navigate('/Login');
    }


    return (
        <>
            <Link onClick={handleLogout}><i class="fa fa-sign-out"></i><p> Log out</p></Link>
        </>
    );
}

export default Logout;