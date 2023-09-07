
import './Register.css'
const handleSubmit =(event)=>{
    event.preventDefault()
    console.log(event.target.email.value);
}
const Register = () => {
    return (
        
        <div className='register-section'>
            <div>
            <h2>Please register Now</h2>
            <form onSubmit={handleSubmit} >
                <input type="email" name='email'id='email' placeholder='enter your email' /> <br />
                <input type="password" name='password' id='password' placeholder='enter your password' /><br />
                <input type="submit" value="register" />
            </form>
            </div>
        </div>
    );
};

export default Register;