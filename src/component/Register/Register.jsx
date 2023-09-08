import { getAuth ,createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.config";
import './Register.css'

const auth = getAuth(app);
const Register = () => {
    const handleSubmit =(event)=>{
        event.preventDefault()
        const email=event.target.email.value;
        const password=event.target.password.value;
        console.log(email,password);

    createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    // Signed in 
    const SignedUser = result.user;
    console.log(SignedUser);
    // ...
  })
  .catch((error) => {
   console.error(error);
    // ..
  });
    }
    return (
        
        <div className='register-section m-20'>
            <div className='text-center'>
            <h2 className='text-2xl font-medium'>Please Register Now</h2>
            <form onSubmit={handleSubmit}>
                <input  className='bg-white p-2 m-2 border-2 rounded-md w-96' type="email" name='email'id='email' placeholder='enter your email' /> <br />
                <input className='bg-white p-2 m-2 border-2 rounded-md w-96' type="password" name='password' id='password' placeholder='enter your password' /><br />
                <input className='bg-green-500 rounded-lg text-white px-6 py-2 hover:bg-green-700' type="submit" value="register" />
            </form>
            </div>
        </div>
    );
};

export default Register;