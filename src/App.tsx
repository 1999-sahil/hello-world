import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom'
import './App.css'

import Wrapper from './components/wrapper'
import CustomNavbar from './components/navbar/navbar';
import Footer from './components/footer';

function App() {
  const location = useLocation();

  useEffect(() => {
    const pageTitles: Record<string, string> = {
      "/": "Sahil Ahmed",
      "/work": "Work",
      "/projects": "Projects",
      "/notes": "My Notes"
    };

    const pageTitle =
      pageTitles[location.pathname] || 
      location.pathname.replace("/", "").charAt(0).toUpperCase() + 
      location.pathname.slice(2);

    document.title = `${pageTitle} | Hello World`;
  }, [location.pathname]);
  return (
    <>
      <CustomNavbar />
      <Wrapper>
        <Outlet />
        <Footer />
      </Wrapper>
    </>
  )
}

export default App
