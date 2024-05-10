import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Import new pages here
import { HomePage } from './pages/HomePage.js';

import Profile from './pages/Profile.js';
import { Registration } from './pages/Registration.js';
import { Login } from './pages/Login.js';
import { UploadArticle } from './pages/UploadArticle.js';

//Add new pages to router
export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path='/Registration' element={<Registration/>}/>
                <Route path="/login" element={<Login/>}/>x
                <Route path="/UploadArticle" element={<UploadArticle/>}/>
            </Routes>
        </Router>
    )
}