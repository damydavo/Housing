import { useNavigate, useLocation, NavigationType } from 'react-router-dom'
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg'

const NavBar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const pathMatchRoute = (route) => {
     return route === location.pathname
     }
    


    return ( 
        <ul className="flex navbar bg-white shadow-lg text-dark-content justify-around font-semibold text-darkGrayishBlue py-6 items-center">
                <li className="flex flex-col cursor-pointer"><ExploreIcon fill= {pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px'onClick={() => navigate('/')} />
                     <p>Explore</p>
                </li>
                <li className="flex flex-col cursor-pointer"><OfferIcon fill= {pathMatchRoute('/offers') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px' onClick={() => navigate('/offers')} />
                     <p>Offer</p>
                </li>
                <li className="flex flex-col cursor-pointer"><PersonOutlineIcon fill={pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px' onClick={() => navigate('/profile')} />
                    <p>Profile</p>
                </li>

    </ul>
     );
}
 

export default NavBar;