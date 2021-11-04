import { signIn } from "../services/firebase";

const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <button onClick={signIn}>Sign In</button>
        </div>
    )
}

export default Login;
