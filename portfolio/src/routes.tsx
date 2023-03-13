import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import NavBarMenu from './Components/NavBarMenu';
import Artigos from './Pages/Artigos';
import Contatos from './Pages/Contatos';
import Curriculo from './Pages/Curriculo';
import Projetos from './Pages/Projetos';
import Home from './Pages/SobreMin';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <NavBarMenu />
        <Routes>
          <Route path='/' element={<NavBar />} >
            <Route index element={<Home />} />
            <Route path='Curriculo' element={<Curriculo />} />
            <Route path='Projetos' element={<Projetos />} />
            <Route path='Artigos' element={<Artigos />} />
            <Route path='Contatos' element={<Contatos />} />
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
}