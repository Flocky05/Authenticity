
import './Register.css'
const handleSubmit =(event)=>{
    event.preventDefault()
    const email=event.target.email.value;
    const password=event.target.password.value;
    console.log(email,password);
}
const Register = () => {
    return (
        
        <div className='register-section'>
            <div className='text-center'>
            <h2 className='text-2xl font-medium'>Please register Now</h2>
            <form onSubmit={handleSubmit}>
                <input  className='bg-white p-2 m-2 border-2 rounded-md' type="email" name='email'id='email' placeholder='enter your email' /> <br />
                <input className='bg-white p-2 m-2 border-2 rounded-md' type="password" name='password' id='password' placeholder='enter your password' /><br />
                <input className='bg-green-500 rounded-lg text-white px-4 py-2 hover:bg-green-700' type="submit" value="register" />
            </form>
            </div>
        </div>
    );
};

export default Register;