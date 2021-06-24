import React, {Component} from 'react';
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import 'react-dropdown/style.css';
import { Col, Input, Row, InputNumber, Button } from "antd";
import Bob from './components/Bob';
import Alice from './components/Alice';

import powerMod from "./helpers/powerMod";
import mulMod from "./helpers/mulMod";
import divMod from "./helpers/divMod";


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

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          width: '50%'
      }}
  />
);

const { TextArea } = Input;

class ELGAMAL extends Component {
  state = {
    message : '',
    p : primes[0],
    g: 1,
    x: 0,
    y: 0,
    k: 0,
    a: 0,
    b: 0,
    arrow: false,
    arrow2: false,
    alice: false,
    step : 1,
  }
  handleChangeP = (e) => {
    const newP = e.value
    this.setState(() => ({
      ...this.state,
      p: newP,
      step: 1,
      g: 1,
    }))
  }
  handleChangeG = (e) => {
    const newG = e.value
    this.setState(() => ({
      ...this.state,
      g: newG,
      step: 1,
    }))
  }
  handleDone1 = () => {
      this.setState(() => ({
        ...this.state,
        step: 2,
      })) 
  }
  handleDone2 = () => {
    this.setState(() => ({
      ...this.state,
      step: 3,
      y: powerMod(this.state.g, this.state.x, this.state.p),
    }))
    setTimeout(() => this.setState(() => ({
      ...this.state,
      arrow: true,
      
    }))  , 500); 
  }
  handleChangeX = (e) => {
    const newX = e.target.value
    if(isNaN(newX)) {
      alert('x has to be a number!');
      this.setState(() => ({
        ...this.state,
        step: 2,
      }))  
    }
    else{
      this.setState(() => ({
        ...this.state,
        x: newX,
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
  handleDone3 = () => {
    this.setState(() => ({
      ...this.state,
      step: 4,
    }))
  }

  handleChangeK = (e) => {
    const newK = e.target.value
    if(isNaN(newK)) {
      alert('k has to be a number!');
    }
    else{
      this.setState(() => ({
        ...this.state,
        k: newK,
      }))
    }
  }
  handleDone4 = () => {
    this.setState(() => ({
      ...this.state,
      step: 5,
      a: powerMod(this.state.g, this.state.k, this.state.p),
      b: mulMod(this.state.y, this.state.k, this.state.p, this.state.message),
    }))
    setTimeout(() => this.setState(() => ({
      ...this.state,
      arrow2: true,
      
    }))  , 500); 
}


  render(){ 
    const {message, p, g, x, y, k, a, b, arrow, arrow2, step} = this.state;  
    return (
    <>
      <br/>
      <h1>El-Gamal Encryption/Decryption</h1>
      <section id="SelectPandG"> 
        <Row align="middle" justify="center">
          <Bob />
          <h2>At Bob's</h2>
        </Row>
          <h3>1. Bob selects a prime number <i>p</i></h3>
          
          <Row align="middle" justify="center">
            <Col sm={1} md={2}>
              <h3>Select p:</h3>
            </Col>
            <Col sm={1} md={2}>
              <Dropdown options={primes} value={p} onChange={this.handleChangeP}/>   
            </Col>
          </Row>
          <br/>
          <hr color = "white"/>
          <h3>2. Bob selects <i>g</i>, where <i>1 &lte; g &lt; p-1</i></h3>
          <Row align="middle" justify="center">
            <Col sm={1} md={2}>
              <h3>Select g:</h3>
            </Col>
            <Col sm={1} md={2}>
              <Dropdown options={Array.from({length: p-1}, (_, i) => i + 1)} value={g} onChange={this.handleChangeG}/>   
            </Col>
          </Row>
          <Row align="middle" justify="center" style={{ margin: 15 }}>
            <Button type="primary" shape="round" style={{ marginRight: 10 }} onClick={this.handleDone1}>
              Done!
            </Button> 
          </Row>
      </section>
      {step > 1 && (
      <section id="SelectX"> 
          <hr color = "white"/>
          
          <h3>3. Bob selects a random number <i>x</i> which will be his private key</h3>
          
          <Row align="middle" justify="center">
            <Col sm={1} md={2}>
              <h3>Select x:</h3>
            </Col>
            <Col sm={1} md={2}>
            <TextArea value={x} placeholder="x" onChange={this.handleChangeX} label="Description"/>   
            </Col>
          </Row>
          <Row align="middle" justify="center" style={{ margin: 15 }}>
            <Button type="primary" shape="round" style={{ marginRight: 10 }} onClick={this.handleDone2}>
              Done!
            </Button> 
          </Row>
      </section>
      )}

      {step > 2 && (
      <section>
        <hr color = "white"/>
        <h3>4. Bob calculates <i>y</i></h3>
        <h4> <i>y</i> = <i>g<sup>x</sup></i> &nbsp; mod &nbsp; <i>p</i></h4>
        <h4><i>y</i> = {powerMod(g, x, p)} </h4>
          
      </section>
      )}
      {arrow === true && (
      <section>
        <hr color = "white"/>
        <h3>5. Then he sends his public key to Alice <i>y</i></h3>
        <h2>KU = &#123; <i>p</i> {p}, <i>g</i>: {g}, <i>y</i>: {powerMod(g, x, p)} &#125;</h2>
        <img scale="50%" src={"https://media0.giphy.com/media/eN4AxQLFu8gM96uvXd/giphy.gif?cid=6c09b952dac0cd7f57f7407592d31e20a0ee6ac97aa9e362&rid=giphy.gif&ct=s"} alt="arrow" />
          
      </section>
      )}

      {arrow === true && (
        <section id="SelectPandG">
          <hr color = "white"/> 
          <Row align="middle" justify="center">
            <Alice />
            <h2>At Alice's</h2>
          </Row>
          <h3>1. Alice selects a message <i>m</i></h3>
    
          <Row align="middle" justify="center">
            <Col sm={1} md={2}>
              <h3>Select m:</h3>
            </Col>
            <Col sm={1} md={2}>
              <TextArea value={message} onChange={this.handleChangeM}/>   
            </Col>
          </Row>
          <Row align="middle" justify="center" style={{ margin: 15 }}>
            <Button type="primary" shape="round" style={{ marginRight: 10 }} onClick={this.handleDone3}>
              Done!
            </Button> 
          </Row>
      </section>
      )}

      {step > 3 && (
      <section id="SelectX"> 
          <hr color = "white"/>
          
          <h3>2. Alice selects a random number <i>k</i></h3>
          <Row align="middle" justify="center">
            <Col sm={1} md={2}>
              <h3>Select <i>k</i>:</h3>
            </Col>
            <Col sm={1} md={2}>
            <TextArea value={k} placeholder="k" onChange={this.handleChangeK}/>   
            </Col>
          </Row>
          <Row align="middle" justify="center" style={{ margin: 15 }}>
            <Button type="primary" shape="round" style={{ marginRight: 10 }} onClick={this.handleDone4}>
              Done!
            </Button> 
          </Row>
      </section>
      )}

      {step > 4 && (
      <section>
        <hr color = "white"/>
        <h3>3. Alice calculates <i>a</i> &amp; <i>b</i></h3>
        <h4> <i>a</i> = <i>g<sup>k</sup></i> &nbsp; mod &nbsp; <i>p</i></h4>
        <h4><i>a</i> = {a} </h4>
        <h4> <i>b</i> = <i>y<sup>k</sup>*M</i> &nbsp; mod &nbsp; <i>p</i></h4>
        <h4><i>b</i> = {b} </h4>
          
      </section>
      )}

    {arrow2 === true && (
      <section>
        <hr color = "white"/>
        <h3>4. Alice sends  <i>a</i> and the encrypted message <i>b</i> to Bob</h3>
        <h2>&#123; <i>a</i> {a}, <i>b</i>: {b} &#125;</h2>
        <img scale="50%" src={"https://media0.giphy.com/media/eN4AxQLFu8gM96uvXd/giphy.gif?cid=6c09b952dac0cd7f57f7407592d31e20a0ee6ac97aa9e362&rid=giphy.gif&ct=s"} alt="arrow" />
      </section>
      )}

    {arrow2 === true && (
        <section id="SelectPandG">
          <hr color = "white"/> 
          <Row align="middle" justify="center">
            <Bob />
            <h2>At Bob's</h2>
          </Row>
          <h3>1. Bob decrypts the message <i>b</i> to obtain <i>m</i></h3>
          <h4><i>m</i> = <i><sup>b</sup>&frasl;<sub>a<sup>x</sup></sub></i>  mod <i>p</i></h4>
          <h4><i>m</i> = {divMod(b%p, powerMod(a, x, p), p)} </h4>
          <img scale="50%" src={"https://images.squarespace-cdn.com/content/v1/553490f8e4b0e276c297620e/1529797469880-PC5WAJE1KZ2EO0ID5511/ke17ZwdGBToddI8pDm48kB-2zlWSwJppa90cCEGAmqhZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIF5UtvEzrMfxdVO7ybNbRoDexafUbiSiqrQWjG4iGukE/ideatodone+banner_v07_B.png"} alt="arrow" />    
      </section>
      )}


      
      

    </>
    );
  }


}

export default ELGAMAL;