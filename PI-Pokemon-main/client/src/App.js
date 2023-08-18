import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Landing from './componentes/Landing/Landing';
import Nav from './componentes/Nav/Nav';
import PokeCards from './componentes/PokeCards/PokeCards';
import Detail from './componentes/Detail/Detail';
import Form from './componentes/Form/Form';
import NavBotons from './componentes/navBotons/navBotons';
import { useState } from 'react';



function App() {


  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const isFilterPage = location.pathname === '/home';
  const [isFilterBotton, setIsFilterBotton] = useState(false);

  const handleSearch = (event) => {
      setIsFilterBotton(event === true);
  };



  return (
    <div className="App">
      {!isLoginPage && <Nav onSearch={handleSearch}/>}
      {isFilterPage && isFilterBotton && <NavBotons/>}
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<PokeCards espacio={isFilterBotton}/>}/>
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/formulario" element={<Form/>} />
      </Routes>
    </div>
  );
}
 
export default App;
