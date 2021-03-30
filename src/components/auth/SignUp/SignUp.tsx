import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Input, Form, FormGroup, Button } from 'reactstrap';
import { SIGNUP } from '../../../types';

const SignUp = () => {
  const [data, setData] = useState({ username: null, password: null, firstname: null, lastname: null, email: null });

  const dispatch = useDispatch()
  const history = useHistory();
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: SIGNUP, username: data.username, password: data.password, firstname: data.firstname, lastname: data.lastname, email: data.email, history })
  }
  return (
    <div className="signup-page">

      <Form onSubmit={formSubmit}>
        <div className="signup-form">
          <FormGroup>
            <Input placeholder="Firstname" onChange={onChangeHandler} name="firstname" type="text" />
          </FormGroup>
          <FormGroup>
            <Input placeholder="Lastname" onChange={onChangeHandler} name="lastname" type="text" />
          </FormGroup>
          <FormGroup>
            <Input placeholder="Email" onChange={onChangeHandler} name="email" type="email" />
          </FormGroup>
          <FormGroup>
            <Input placeholder="Username" onChange={onChangeHandler} name="username" type="text" />
          </FormGroup>
          <FormGroup>
            <Input placeholder="Password" onChange={onChangeHandler} name="password" type="password" />
          </FormGroup>

          <Button>Be a member!!</Button>
        </div>
      </Form>
    </div>
  )
}

export default SignUp
