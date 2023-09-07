
import './Register.css'
const Register = () => {
    return (
        <div>
            <h2>Please register Now</h2>
            <form>
                <input type="email" name='email'id='email' placeholder='enter your email' /> <br />
                <input type="password" name='password' id='password' placeholder='enter your password' /><br />
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Register;