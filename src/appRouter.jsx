import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AppLayout from './components/AppLayout.jsx';
// import Login from './components/Login';
import NoPage from './core/components/NoPage.jsx';
// import CONSTANSTS from './constants/appConstants.jsx';
import MENU_LIST from './constants/menuConstants.jsx';
import Login from './components/Login.jsx'

const AppRouter = () => {
  let arr = [...MENU_LIST];

  const getRoutes = (menus=[], routes=[]) => {
    
    if(routes.length === 0) {
      const root = menus.find(f => f.url === "/");
      if(root && root.element){
        routes.push(<Route key="router-0" index element={root.element} />);
      }
    }

    menus.filter(f => f.url !== "/").map((m, index) => {
      if(m && m.element){
        routes.push(<Route key={(index+1)+"-router"} path={m.url} element={m.element} />);
      }
      if (m && m.subMenu) {
        routes.concat(getRoutes(m.subMenu, routes));
      }
    });

    return routes;
  }

  return <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<AppLayout/>}>
          {getRoutes(arr)}
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default AppRouter;
