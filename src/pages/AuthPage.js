import AuthForm from 'components/AuthForm';
import React from 'react';
import { Card, Col, Row } from 'reactstrap';

class AuthPage extends React.Component {
  handleAuthState = authState => {
    this.props.history.push('/login');
  };

  handleLogoClick = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <Row
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Col md={6} lg={4}>
          <Card body>
            <AuthForm
              onChangeAuthState={this.handleAuthState}
              onLogoClick={this.handleLogoClick}
              setIsLogin={this.props.setIsLogin}
            />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default AuthPage;
