import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import Navbar from './components/Navbar';
import Contact from './routes/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path= "/">
            <Navbar/>
            <Hero/>
            <Analytics/>
            <Newsletter/>
            <Cards/>
            <Footer/>
          </Route>
          <Route exact path='/contact'>
            <Navbar/>
            <Contact/> 
            <Footer/>  
          </Route>
        </Switch>
      </Router>
     
     {/* <p><Navbar /></p>
      <Hero />
      <Analytics />
      <Outlet />
      <Newsletter />
      <Cards />
  <Footer />*/}
    </div>
      
  );
}

export default App;