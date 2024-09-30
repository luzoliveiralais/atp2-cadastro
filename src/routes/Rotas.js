import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Profile from '../pages/Profile/Index';
import Home from '../pages/Home/Index';
import SignUp from '../pages/SignUp/Index';


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" element={<Home/>} />
                <Route exact={true} path="/signup" element={<SignUp/>} />
                <Route exact={true} path="/profile" element={<Profile/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas; 
