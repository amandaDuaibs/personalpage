import {Home} from '../Pages/Home/index';
import {Curriculo} from '../Pages/Curriculo/index';
import {Projetos} from '../Pages/Projetos/index';
import {Artigos} from '../Pages/Artigos/index';
import {Contato} from '../Pages/Contato/index';
import { RouteConfig } from "../globalTypes";
import * as Route from '../Constants/routes';


const routes: RouteConfig[] = [
  {
    path: Route.HOME_PAGE,
    component: <Home/>,
  },
  {
    path:'/Curriculo',
    component: <Curriculo/>,
  },
  {
    path:'/Projeto',
    component: <Projetos/>,
  },
  {
    path:'/Artigos',
    component: <Artigos/>,
  },
  {
    path:'/Contato',
    component: <Contato/>,
  },
];

export default routes;
