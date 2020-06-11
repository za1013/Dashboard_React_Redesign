import logo200Image from 'assets/img/logo/logo_200.png';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';


const AuthForm = ({
  showLogo,
  usernameLabel,
  usernameInputProps,
  passwordLabel,
  passwordInputProps,
  children,
  onLogoClick,
  setIsLogin
}) => {

  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  const onChangePhone = (e) => {
    setPhone(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const checkPhone = () => {
    if(/^[0-9]{11}$/.test(phone+"")){
      return true
    }
    return false
  }

  const checkPassword = () => {
    if(/^.*(?=^.{8,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/.test(password)){
      // * 8 ~ 20 자리 , 소.대문자 특문 포함, 숫자 포함
      return true
    }
    return false
  }

  const handleSubmit = event => {
    event.preventDefault();
    if(checkPhone() && checkPassword()){
      const user = {
        id : 1,
        name : "tester",
        phone : phone,
      }
      window.sessionStorage.setItem("user", user)
      setIsLogin(true)
    }else{
      alert("양식이 맞지않습니다.")
    }    
  };



    return (
      <Form onSubmit={handleSubmit}>
        {showLogo && (
          <div className="text-center pb-4">
            <img
              src={logo200Image}
              className="rounded"
              style={{ width: 60, height: 60, cursor: 'pointer' }}
              alt="logo"
              onClick={onLogoClick}
            />
          </div>
        )}
        <FormGroup>
          <Label for={usernameLabel}>{usernameLabel}</Label>
          <Input onChange={onChangePhone} value={phone} {...usernameInputProps} />
        </FormGroup>
        <FormGroup>
          <Label for={passwordLabel}>{passwordLabel}</Label>
          <Input onChange={onChangePassword} value={password} {...passwordInputProps} />
        </FormGroup>
        <hr />
        <Button
          size="lg"
          className="bg-gradient-theme-left border-0"
          block
          onClick={handleSubmit}>
          Login
        </Button>
        {children}
      </Form>
    );
  
}

AuthForm.propTypes = {
  showLogo: PropTypes.bool,
  usernameLabel: PropTypes.string,
  usernameInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,
  onLogoClick: PropTypes.func,
};

AuthForm.defaultProps = {
  showLogo: true,
  usernameLabel: 'Phone Number',
  usernameInputProps: {
    type: 'number',
    placeholder: 'your phone number',
  },
  passwordLabel: 'Password',
  passwordInputProps: {
    type: 'password',
    placeholder: 'your password',
  },
  onLogoClick: () => {},
};

export default AuthForm;
