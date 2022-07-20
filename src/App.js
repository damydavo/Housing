import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from './pages/explore';
import Offers from './pages/offers';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import ForgotPassword from './pages/forgotPassword';
import NavBar from './components/navBar';

const App = () => {
    return ( 
        <>
        <Router>
         <div className="flex flex-col justify-between h-screen">

            {/* <Body/> */}

         <main className="container">
         <Routes>
            <Route path='/' element={<Explore />} />
            <Route path='/offers' element={<Offers />} />
            <Route path='/profile' element={<SignIn />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/signUp' element={<SignUp />} />

            <Route path='/forgot-password' element={<ForgotPassword />} />
         </Routes>
         </main>

         <NavBar/>

         </div>
       
        </Router>
        </>
     );
}
 
export default App;