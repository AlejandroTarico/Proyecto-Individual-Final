import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Landing from './componentes/Landing/Landing';
import Nav from './componentes/Nav/Nav';
import PokeCards from './componentes/PokeCards/PokeCards';
import Detail from './componentes/Detail/Detail';



function App() {




  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <div className="App">
      {!isLoginPage && <Nav/>}
      <Routes>
        <Route path="/" element={<Landing onSearch />}/>
        <Route path="/home" element={<PokeCards  />}/>
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      
    </div>
  );
}
 
export default App;
