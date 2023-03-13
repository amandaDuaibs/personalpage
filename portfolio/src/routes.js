import Menu from 'Components/menu';
import PaginaPadrao from 'Components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function AppRouter(){
    return(
       <main>
            <Router>
                <Menu/>
                <Routes>
                    <Route path='/' element={<PaginaPadrao/>}/>
                    <Route index element={<Inicio/>}/>
                    <Route path='cardapio' element={<Cardapio/>}/>  
                </Routes>
            </Router>
       </main>
    );
}