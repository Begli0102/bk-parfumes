import React, { useContext } from 'react'
import { ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import {
  Container,
  Wrapper,
  Left,
  Logo,
  Right,
  MenuItem
} from '../styled-components/nav'

const Nav = () => {
  const { cartItems, isAuthenticated, setIsAuthenticated } = useContext(
    ProductContext
  )

  const history = useHistory()

  const logOut = () => {
    localStorage.removeItem('token')
    history.push('/')
    setIsAuthenticated(false)
  }

  return (
    <Container>
      <Wrapper>
        <Left style={{ textDecoration: 'none', color: 'white' }}>
          <Logo>BK-Parfumes</Logo>
        </Left>

        <Right>
          {!isAuthenticated ? (
            <>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to='/register'
              >
                <MenuItem>Register</MenuItem>
              </Link>

              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to='/login'
              >
                <MenuItem>Log in</MenuItem>
              </Link>
            </>
          ) : (
            <>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to='/home'
              >
                <MenuItem>Home</MenuItem>
              </Link>

              <MenuItem onClick={logOut}>Log out</MenuItem>

              <MenuItem>
                <Link to='/cart'>
                  <Badge badgeContent={cartItems.length} color='primary'>
                    <ShoppingCartOutlined style={{ color: 'white' }} />
                  </Badge>
                </Link>
              </MenuItem>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Nav
