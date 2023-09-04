import React from 'react'
import './App.css'
import styled from 'styled-components'

//Pages
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import CartPage from './pages/CartPage'
import LandingPage from './pages/LandingPage'

//Components
import Nav from './components/Nav'
import Footer from './components/Footer'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

const Container = styled.div``

function App () {
  return (
    <Router>
      <Container>
        <Nav />
        <Switch>
          <Route exact path='/register' render={() => <RegisterPage />} />
          <Route exact path='/login' render={() => <LoginPage />} />

          <Route exact path='/cart' render={() => <CartPage />} />
          <Route exact path='/home' render={() => <HomePage />} />
          <Route exact path='/' render={() => <LandingPage />} />
        </Switch>
      </Container>
    </Router>
  )
}

export default App
