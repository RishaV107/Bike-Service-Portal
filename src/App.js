 import db from './firebase.config';
import React,{useState,useEffect} from 'react';
 
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Appointment from './components/Appointment'
import Header from './components/Header'
import Maincard from './components/Maincard'
import Layout from './components/Layout'
import Button from './components/Button'
import Service from './components/Services'
import Card from './components/card'
import HowItWork from './components/HowItwork'
import Garrage from './garrage'
import cardDetails from './components/CardDeatils'
import Checkout from './components/modal' 
const App = () => {
  const [blogs, setBlogs] = useState([])
  const shopref = db.ref('shop');
  useEffect( () => {
    shopref.on('value',(snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val())
        setBlogs(snapshot.val())
      }
      else {
        console.log("no data")
      }
    })
    }, [])
  
  
 
   
  
  return(
    
   
    <Router>
      
      <Layout>
        
       <div className="Top">
        <div className="Top-bg"></div>
        <div className="container">
          <h1 className="Top-title">
            Get Your Bike Serviced From Your Doorstep
          </h1>
          <Button text="MAKE AN APPOINTMENT" />
        </div>
      </div>
      <Switch>
        
        <Route exact path="/" component={()=><Garrage data={blogs}/>}
        />
        
        <Route exact path="/services" component={Service}/>
       
             
          <Route path="/contact" component={Appointment}/>
              
    
        <Route path="/work" component={HowItWork}/>
         <Route  path="/detail" component={cardDetails}/>   
         <Route path="/checkout/:price"component ={Checkout}/>
        </Switch>
              </Layout>
        </Router>
  
  )
}

export default App;
