import React, {Component} from 'react';
import { Dropdown, Selection } from 'react-dropdown-now';
import {animated, useSpring} from 'react-spring'
import 'react-dropdown-now/style.css';
import 'react-dropdown/style.css';
import { Col, Input, Row, Button } from "antd";
import { useState } from "react";

import encryptRSA from "./helpers/encryptRSA";
import decryptRSA from "./helpers/decryptRSA";
import generateDEpairs from "./helpers/generateDEpairs";
import validPair from "./helpers/validPair";

const { TextArea } = Input;
const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          width: '50%'
      }}
  />
);
const primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 
  53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 
  109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 
  173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 
  233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 
  293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 
  367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 
  433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 
  499, 503, 509, 521, 523, 541
];

class RSA extends Component {
  state = {
    message : '',
    crypt : '',
    p : 2,
    q : 3,
    d: 0, 
    e: 0,
    step : 1,
  }
  
  handleChangeP = (e) => {
    const newP = e.value
    this.setState(() => ({
      ...this.state,
      p: newP,
      step: 1,
      DEpairs : [],
    }))
  }
  handleChangeQ = (e) => {
    const newQ = e.value
    this.setState(() => ({
      ...this.state,
      q: newQ,
      step: 1
    }))    
  }
  
  handleDone1 = () => {
    if(this.state.p === this.state.q) {
      this.setState(() => ({
        ...this.state,
        step: 1, 
        DEpairs : []
      })) 
      alert('Please select different values of p and q');
    }
    else {
      this.setState(() => ({
        ...this.state,
        step: 2,
        DEpairs : generateDEpairs((this.state.p - 1)*(this.state.q - 1)) 
      })) 
    }
  }
  handleChangeD = (e) => {
    const newD = e.target.value
    console.log(typeof e.target.value)
    if(isNaN(newD)) {
      alert('Please enter a number!')
    }
    else {
      this.setState(() => ({
        ...this.state,
        d: newD,
      })) 
    }   
  }
  handleChangeE = (e) => {
    const newE = e.target.value
    console.log(typeof e.target.value)
    if(isNaN(newE)) {
      alert('Please enter a number!')
    }
    else {
      this.setState(() => ({
        ...this.state,
        e: newE,
      })) 
    }   
  }
  handleDone2 = () => {
    console.log(validPair(this.state.e, this.state.d, (this.state.p - 1)*(this.state.q - 1)));
    if(!validPair(this.state.e, this.state.d, (this.state.p - 1)*(this.state.q - 1))) {
      alert('This is not a valid e and d pair')
      this.setState(() => ({
        ...this.state,
        step: 2,
      }))
    }
    else {
      this.setState(() => ({
        ...this.state,
        step: 3,
      }))
    }
  }
  handleChangeM = (e) => {
    const newM = e.target.value
    console.log(typeof e.target.value)
    if(isNaN(newM)) {
      alert('Please enter a number!')
    }
    else {
      this.setState(() => ({
        ...this.state,
        message: newM,
      })) 
    }   
  }
  
  handleEncrypt = () => {
    if(this.state.message.length == 0) {
      alert('Please enter a message to Encrypt')
      this.setState(() => ({
        ...this.state,
        step: 3,
        crypt: '',
      }))
    }
    else {
      const newC = encryptRSA(this.state.message, this.state.e, this.state.q*this.state.p)
      this.setState(() => ({
        ...this.state,
        step: 4,
        crypt: newC,
      }))
    }
  }
  handleDecrypt = () => {
    if(this.state.crypt.length == 0) {
      alert('Nothing to decrypt!')
      this.setState(() => ({
        ...this.state,
        step: 4,
      }))
    }
    else {
      const newM = decryptRSA(this.state.crypt, this.state.d, this.state.q*this.state.p)
      this.setState(() => ({
        ...this.state,
        step: 5,
      }))
    }
  }
  render(){ 
    const {message, crypt, p, q, d, e, step, DEpairs} = this.state;  
    return (
    <>
      <br/>
      <h1>RSA Public Key Encryption/Decryption</h1>
      <center>
        
        <section id="SelectPandQ"> 
          
          <h2>1. Select <i>p</i> and <i>q</i></h2>
          <h3>Such that: <i>p</i> and <i>q</i> are prime, <i>p</i> != <i>q</i></h3>
          <Row align="middle" justify="center">
            <Col sm={1} md={2}>
              <h3>Select p:</h3>
            </Col>
            <Col sm={1} md={2}>
              <Dropdown options={primes} value={p} onChange={this.handleChangeP}/>   
            </Col>
            <Col sm={5} md={2}></Col>
            <Col sm={1} md={2}>
              <h3>Select q:</h3>
            </Col>
            <Col sm={1} md={2}>
              <Dropdown options={primes} value={q} onChange={this.handleChangeQ}/>   
            </Col>
          </Row>
          <Row></Row>
          <Row justify="center" style={{ margin: 15 }}>
            <Button
              type="primary"
              shape="round"
              style={{ marginRight: 10 }}
              onClick={this.handleDone1}
            >
              Done!
            </Button>
            
          </Row>
        </section>
        
        
        {step > 1 && (
          
          <section id="NandR"> 
          <hr color = "white"/>
          <h2>2. Calculate <i>n</i> and <i>r</i></h2>
          <Row align="middle" justify="center">
            <Col sm={1} md={2}>
              <h3><i>n</i> = <i>p</i>*<i>q</i> = {p*q}</h3>
            
            </Col>
            
            <Col sm={2} md={3}></Col>
            <Col sm={2} md={3}>
              <h3><i>r</i> = (<i>p</i>-1)*(<i>q</i>-1) = {(p-1)*(q-1)}</h3>
            </Col>
            
          </Row>
          <hr color = "white"/>
          <Row align="middle" justify="center"><h2>3. Now, select <i>e</i> &amp; <i>d</i>, such that:</h2></Row>
            <ol align="center">
              <Row align="middle" justify="center">
                <li><strong><i>gcd(e, r) = 1 </i></strong></li>
              </Row>
              <Row align="middle" justify="center">
                <li><strong><i>1 &lt; e &lt; r</i></strong></li>
              </Row> 
              <Row align="middle" justify="center">
                <li><strong><i>d * e mod r = 1</i></strong></li>
              </Row>
            </ol>
          <hr color = "white"/>
          <Row align="middle" justify="center">
            <h2>Candidate <i>e</i> &amp; <i>d</i> pairs:</h2>
          </Row>
       <p>   
      {DEpairs.length == 0 &&(
        <h4>There are no valid pairs of <i>e</i> &amp; <i>d</i> for the given <i>r</i></h4>
      )}
      <div className="w-100 p-3">
      {
        DEpairs.map((pair) => {
          return (
            <span key={pair}>
              ({pair.E}, {pair.D}), &nbsp;

            </span>
          );
        })
      }
    </div>
    </p>

    {DEpairs.length > 0 &&
    (
    <section id="SelectEandD"> 
          
          
          <Row align="middle" justify="center">
            <Col sm={1} md={2}>
              <h3>Select e:</h3>
            </Col>
            <Col sm={1} md={2}>
              <TextArea
                value={e}
                placeholder="e"
                onChange={this.handleChangeE}
                label="Description"
              />
            </Col>
            <Col sm={5} md={2}></Col>
            <Col sm={1} md={2}>
              <h3>Select d:</h3>
            </Col>
            <Col sm={1} md={2}>
            <TextArea
              value={d}
              placeholder="d"
              onChange={this.handleChangeD}
              label="Description"
            />
              
            </Col>
          </Row>
          <Row></Row>
          <Row justify="center" style={{ margin: 15 }}>
            <Button
              type="primary"
              shape="round"
              style={{ marginRight: 10 }}
              onClick={this.handleDone2}
            >
              Done!
            </Button>
            
          </Row>

        </section>
        )}
        </section>
        
          
        )}

    {step > 2 && (
          
    <section id="SelectM"> 
          <hr color = "white"/>
          <h3> p = {p}, q = {q}, e = {e}, d = {d} </h3> 
          <h2>Public Key: KU = &#123; <i>e</i>: {e}, <i>n</i>: {p*q}&#125;</h2>
          <h2>Private Key: KR = &#123; <i>d</i>: {d}, <i>n</i>: {p*q}&#125;</h2>
          <hr color = "white"/>
          <h2>4. Select your message <i>m</i></h2>
          
          <Row align="middle" justify="center">
            <Col sm={1} md={2}>
              <h3>Select <i>m</i>:</h3>
            </Col>
            <Col sm={1} md={2}>
              <TextArea
                value={message}
                placeholder="m"
                onChange={this.handleChangeM}
                label="Description"
              />
            </Col>
          </Row>
          <Row></Row>
          <Row justify="center" style={{ margin: 15 }}>
            <Button
              type="primary"
              shape="round"
              style={{ marginRight: 10 }}
              onClick={this.handleEncrypt}
            >
              Encrypt
            </Button>
            
          </Row>

        </section>
          
        )}
        {step > 3 && (
          
          <section id="encryptedText"> 
                
                <h3> <i>c</i> = <i>m<sup>e</sup></i> (mod <i>n</i>)   </h3> 
                <h3> <i>c</i> = {crypt}   </h3> 
                
                
                    
                    <Row justify="center" style={{ margin: 15 }}>
                      
                      <Button
                        type="primary"
                        shape="round"
                        style={{ marginRight: 10 }}
                        onClick={this.handleDecrypt}
                      >
                        Decrypt
                      </Button>
                      
                    </Row>
                    {step > 4 && (
          
                    <section id="encryptedText"> 
                
                      <h3> <i>m</i> = <i>c<sup>d</sup></i> (mod <i>n</i>)   </h3> 
                      <h3> <i>m</i> = {decryptRSA(crypt, d, p*q)}   </h3>       
                      <hr color = "white"/>
                      </section>
                    )}
              </section>
                
              )}


        
      </center>
    </>
  );
  }
}

export default RSA;