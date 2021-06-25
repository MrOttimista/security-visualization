import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Layout, Menu } from "antd";

import "antd/dist/antd.css";

import "./App.css";
import Home from "./components";
import CipherFunctions from "./components/CipherFunctions";
import BlockChain from "./components/Blockchain";
import RSA from "./components/RSA";
import SHA512 from "./components/SHA512";
import ELGAMAL from "./components/ELGAMAL";
import "./App.css";

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Layout style={{height:'100vh'}}>
          <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key={"Home"}>
                <Link to="/">Home</Link>{" "}
              </Menu.Item>
              <Menu.Item key={"BlockChain"}>
                <Link to="BlockChain"></Link>BlockChain
              </Menu.Item>
              <Menu.Item key={"Cipher"}>
                <Link to="Cipher"></Link>Cipher
              </Menu.Item>
              <Menu.Item key={"RSA"}>
                <Link to="RSA"></Link>RSA
              </Menu.Item>
              <Menu.Item key={"ELGAMAL"}>
                <Link to="ELGAMAL"></Link>ELGAMAL
              </Menu.Item>
              <Menu.Item key={"SHA512"}>
                <Link to="SHA512"></Link>SHA512
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            <div>
              <Switch>
                <Route path="/blockChain">
                  <BlockChain />
                </Route>
                <Route path="/cipher">
                  <CipherFunctions />
                </Route>
                <Route path="/RSA">
                  <RSA />
                </Route>
                <Route path="/SHA512">
                  <SHA512 />
                </Route>
                <Route path="/ELGAMAL">
                  <ELGAMAL />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Content>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
