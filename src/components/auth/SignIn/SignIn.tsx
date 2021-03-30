import React, { useState, useEffect } from 'react'
import { Input, Form, FormGroup, Button } from 'reactstrap';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { GOOGLE_LOGIN, LOGIN } from '../../../types'
import { useHistory } from 'react-router';
import { addUser } from '../../../redux/actions/user';
const SignIn = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [data, setData] = useState({ username: null, password: null });
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  }
  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: LOGIN, username: data.username, password: data.password, history })

  }
  const responseGoogle = (response: any) => {
    dispatch({ type: GOOGLE_LOGIN, response, history })
  }
  return (
    <div className="signin-page">

      <Form onSubmit={formSubmit}>
        <div className="signin-form">
          <FormGroup>
            <Input placeholder="Username" onChange={onChangeHandler} name="username" type="text" />
          </FormGroup>
          <FormGroup>
            <Input placeholder="Password" onChange={onChangeHandler} name="password" type="password" />
          </FormGroup>
          <Button>Go!!</Button>
          <GoogleLogin
            clientId="192839958131-squ9t997l515vo0j3qse5bvrcti1m5gk.apps.googleusercontent.com"
            // render={renderProps => (
            //   <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>Log in with Google</Button>
            // )}
            icon
            buttonText="Login"
            onSuccess={responseGoogle}
            // onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </Form>
    </div>
  )
}

export default SignIn
