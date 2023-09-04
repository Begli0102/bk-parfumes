import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import Spinner from 'react-bootstrap/Spinner'

import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Li,
  Error,
  Loading
} from '../styled-components/loginPage'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const { setIsAuthenticated, isAuthenticated } = useContext(ProductContext)

  const handleSubmit = e => {
    e.preventDefault()
    let setisValid = formValidation()
    if (setisValid) {
      /* Send a request to the server for authentication */
      axios
        .post('https://bk-parfumes.herokuapp.com/users/login', {
          email: email,
          password: password
        })
        .then(response => {
          const data = response.data
          console.log(data)

          setIsAuthenticated({
            isAuthenticated: localStorage.setItem(
              'token',
              JSON.stringify(data.token)
            )
          })
          history.push('/home')
        }, setLoading(true))
        .catch(error => {
          if (error.response) {
            console.log(error.response.data)
          }
        })
    }
    setIsAuthenticated(isAuthenticated)
  }

  const formValidation = () => {
    let emailError = {}
    let passwordError = {}
    let isValid = true
    if (!email.includes('.') || !email.includes('@')) {
      emailError.emailNotEmail = 'A valid email address is required.'
      isValid = false
    } else if (!email) {
      emailError.emailNotEmail = 'Email is required!'
      isValid = false
    }
    if (!password) {
      passwordError.passwordMissing = 'Password is required!'
      isValid = false
    } else if (password.trim().length < 4) {
      passwordError.passwordMissing = 'Password must be more than 4 characters'
      isValid = false
    } else if (password.trim().length > 10) {
      passwordError.passwordMissing =
        'Password cannot exceed more than 10 characters'
      isValid = false
    }
    setEmailError(emailError)
    setPasswordError(passwordError)
    return isValid
  }

  return (
    <Container>
      <Wrapper>
        {loading ? <Spinner animation='border' /> : ''}

        <Title>Sign in</Title>
        <Form>
          <Input
            name='email'
            placeholder='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></Input>
          {Object.keys(emailError).map(key => {
            return <Error key={key}>{emailError[key]}</Error>
          })}

          <Input
            name='password'
            type='password'
            placeholder='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></Input>
          {Object.keys(passwordError).map(key => {
            return <Error key={key}>{passwordError[key]}</Error>
          })}
          <Button onClick={handleSubmit}>Log in</Button>
          <Li>FORGOT THE PASSWORD?</Li>
          <Link
            style={{
              textDecoration: 'none',
              color: 'white',
              fontWeight: 'bold'
            }}
            to='/register'
          >
            CREATE A NEW ACCOUNT
          </Link>
        </Form>
      </Wrapper>
    </Container>
  )
}
export default LoginPage
