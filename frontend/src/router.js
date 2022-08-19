import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Registerrr from './Registerrr';
import Login from './Login';
import Search from './Search';
import Custom from './Custom';
import OrderConfirmed from './OrderConfirmed';
import Favorites from './Favorites';
import SelectTag from './SelectTag';
import Recommendation from './Recommendation';
import DetailView from './DetailView';
// import Dropdown from './Dropdown';
import Home from './Home';
import Keyword from './Keyword';
import KeyRecommendation from './KeyRecommendation';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/register2' element={<Registerrr />} />
                <Route path='/login' element={<Login />} />
                <Route path='/search' element={<Search />} />
                <Route path='/custom' element={<Custom />} />
                <Route path='/orderconfirmed' element={<OrderConfirmed />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/selecttag' element={<SelectTag />} />
                <Route path='/recommendation/' element={<Recommendation />} />
                <Route path='/detailview' element={<DetailView />} />
                <Route path='/detailview/:id' element={<DetailView />} />
                {/* <Route path='/dropdown' element={<Dropdown />} /> */}
                <Route path='/keyword' element={<Keyword />} />
                <Route path='/keyrecommendation' element={<KeyRecommendation />} />


            </Routes>
        </BrowserRouter>
    );
}
export default Router;
