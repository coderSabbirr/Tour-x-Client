
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './login.css'

const Login = () => {
    const { signInUsingGoogle, setError } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handalGoogleLogin = () => {

        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .catch(error => {
                setError("popup-closed you");
            })

    }

    return (
        <div className="text-center mt-5 login">
            <p className="login-btn" onClick={handalGoogleLogin}><img src="https://i.ibb.co/xCQCnvY/5a35540277d9e6-8445514415134443544909.png" alt="" /><button >Login with google</button></p>
        </div>
    );
};

export default Login;