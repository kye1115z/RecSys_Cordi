import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Registerrr from './Registerrr';
import Login from './Login';
import Search from './Search';
import Custom from './Custom';
import OrderConfirmed from './OrderConfirmed';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/register2' element={<Registerrr />} />
                <Route path='/login' element={<Login />} />
                <Route path='/search' element={<Search />} />
                <Route path='/custom' element={<Custom />} />
                <Route path='/orderconfirmed' element={<OrderConfirmed />} />
                
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
