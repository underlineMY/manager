import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './common/Header';
import Footer from './common/Footer';
import NavLeft from './common/NavLeft';
import { GlobalStyle } from './style';
import { Row, Col } from 'antd';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Row>
        <GlobalStyle />
        <Col span={4}>
          <NavLeft></NavLeft>
        </Col>
        <Col span={20}>
          <Header />
          <Row>content</Row>
          <Footer />
        </Col>    
      </Row>
      </Provider>
    );
  }
}

export default App;
