import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import 'antd/dist/antd.css';

import './App.css';
import Home from './components';
import CipherFunctions from './components/CipherFunctions';
import Blockchain from './components/Blockchain'
import RSA from './components/RSA';

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key={'Home'}>
                <Link to="/">Home</Link>{' '}
              </Menu.Item>
              <Menu.Item key={'BlockChain'}>
                <Link to="BlockChain"></Link>Blockchain
              </Menu.Item>
              <Menu.Item key={'Cipher'}>
                <Link to="Cipher"></Link>Cipher
              </Menu.Item>
              <Menu.Item key={'RSA'}>
                <Link to="RSA"></Link>RSA
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            <div>
              <Switch>
                <Route path="/blockChain">
                  <Blockchain />
                </Route>
                <Route path="/cipher">
                  <CipherFunctions />
                </Route>
                <Route path="/rsa">
                  <RSA />
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
