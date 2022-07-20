import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, SignInWithEmailAndPassword } from "firebase/auth";
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'


const SignIn = () => {
   const [showPassword, setShowPassword] = useState(false)
   const [ text, setText ] = useState({
    email: '',
    password: '',
   })

   const { email, password } = text

   const navigate = useNavigate()

   const handleChange = (e) => {
       setText((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value
       }))
   }

   const handleSubmit = async (e) => {
       e.preventDefault()

       try{
        const auth = getAuth()
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
 
        if(userCredential.user) {
             navigate('/')
        }
       } catch(error) {
          console.log(error)
       }

     

   }
 
    return ( 
        <>
          <h2 className="text-md font-bold text-center mt-10"></h2>
        <form onSubmit={ handleSubmit } className="container mx-auto mt-4 w-96">
             <label className="block mb-4">
                <span className="block text-sm font-medium ">Username</span>
                </label>

                <input 
                placeholder="username" 
                type="text" 
                id = 'email'
                value= { email }
                onChange = { handleChange }
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 "/>

            <label className="block mb-4">
                <span className="block text-sm font-medium ">Password</span>
                </label>

                <div className=" flex relative items-center my-2">
               <input
                placeholder="password" 
                type={ showPassword ? 'text' : 'password' }
                id = 'password' 
                value= { password } 
                onChange = { handleChange }
                className="mt-1 block w-full px-3 py-2 bg-white
                 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 "/>
                  <img className="flex absolute right-2" src={ visibilityIcon } alt="show password" onClick = { () => setShowPassword((prevState) => !prevState)  } />

                  </div>


            <Link to ='/forgotPassword' className="flex justify-end mt-6 text-brightRedLight" >
                   Forgot Password
            </Link>

            <div className="flex justify-between my-6 itee">
                 <p className="flex items-center font-bold">Sign In</p>
                 <button className="btn">
                    <ArrowRightIcon fill ='#ffffff' width="34px" height="34px" />
                 </button>
            </div>

               {/* Google AUTH */}

        <Link to ='/signUp' className="flex text-center text-brightRed">
            <p>Sign Up instead!</p>
        </Link>
        </form>

     
        </>
      
     );
}
 
export default SignIn; 