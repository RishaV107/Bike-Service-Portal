import React, { useState } from 'react';
import './modal.css';
import {
 
  useParams
} from "react-router-dom";
import { Button, Input, Modal, Form, DatePicker, Radio } from "antd";
import formimg from '../photos/form.jpg'
const Checkout = () => {

    const [fname,setfname]=useState('')
    const [lname,setlname]=useState('')
    const [Address,setAddress]=useState('')
    const [phone,setphone]=useState('')
    const [email,setemail]=useState('')
    const handlefname=(e)=>{
        setfname(e.target.value)
        console.log(fname)
    }
const handlelname=(e)=>{
        setlname(e.target.value)
        console.log(fname)
    }
const handleAdd=(e)=>{
        setAddress(e.target.value)
        console.log(fname)
    }
const handlephone=(e)=>{
        setphone(e.target.value)
        console.log(fname)
    } 
const handleemail=(e)=>{
        setemail(e.target.value)
        console.log(fname)
    }              
    const { price } = useParams();
    console.log(price)
  return (
    <div className="formcont">
    <Form
                layout="horizontal"
                initialValues={{
                  size: "large",
                }}
                size="large"
                className="formbox"
              >
               <Form.Item rules={[{ required: true }]}>
                  <Input
                    name="firstName"
                    value={fname}
                    onChange={handlefname}
                    required
                    placeholder="Enter your first name"
                    className="forml"
                  />
              
                </Form.Item>
                   <Form.Item rules={[{ required: true }]}>
                  <Input
                    name="lastname"
                    value={lname}
                    onChange={handlelname}
                    required
                    placeholder="Enter your last name"
                     className="forml"
                  />
              
                </Form.Item>
                   <Form.Item rules={[{ required: true }]}>
                  <Input
                    name="Address"
                    value={Address}
                    onChange={handleAdd}
                     className="forml"
                    required
                    placeholder="Enter your Address"
                  />
              
                </Form.Item>
                    <Form.Item rules={[{ required: true }]}>
                  <Input
                    name="phone"
                    value={phone}
                    onChange={handlephone}
                    required
                     className="forml"
                    placeholder="Enter your Phone Number"
                  />
              
                </Form.Item>
                    <Form.Item rules={[{ required: true }]}>
                  <Input
                    name="phone"
                    value={phone}
                     className="forml"
                    onChange={handlephone}
                    required
                    placeholder="Enter your Phone Number"
                  />
              
                </Form.Item>
                     <Form.Item rules={[{ required: true }]}>
                  <Input
                    name="email"
                    value={email}
                     className="forml"
                    onChange={handleemail}
                    required
                    placeholder="Enter your email"
                  />
              
                </Form.Item>

              </Form>
              <div className="rside">
              <img  src={formimg}/>
              <h3 className="pricehead">Your Total is {price}</h3>
              <button className="btn">Checkout</button>
              </div>

     </div>
  );
};

export default Checkout;