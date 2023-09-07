
import './Register.css'
const handleSubmit =(event)=>{
    console.log(event.target);
}
const Register = () => {
    return (
        
        <div>
            <h2>Please register Now</h2>
            <form onSubmit={handleSubmit} >
                <input type="email" name='email'id='email' placeholder='enter your email' /> <br />
                <input type="password" name='password' id='password' placeholder='enter your password' /><br />
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Register;