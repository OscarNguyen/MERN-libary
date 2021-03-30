import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'

import { logOut } from '../../redux/actions/user'
import { AppState } from '../../types'
import Avatar from '../Avatar/Avatar'



const NavbarCmp = () => {
  const isLogin = useSelector((state: AppState) => state.user.isLogin)
  const user = useSelector((state: AppState) => state.user.user)
  const imgUrl = isLogin ? user!.img : ""
  const dispatch = useDispatch()
  const location = useLocation().pathname;
  const Loggedin = () => (

    <div className="navbar__button-list" >
      <Avatar url={imgUrl} />
      <Button onClick={() => dispatch(logOut())} className="navbar__button">Sign out</Button>
    </div>


  )

  const LoggedOut = () => (
    <div className="navbar__button-list" >

      <Button className="navbar__button"><NavLink to="/signup" >Sign up</NavLink></Button>

      <Button className="navbar__button"> <NavLink to="/signin" >Sign in</NavLink></Button>

    </div>
  )
  let navbarClass = classNames({
    'navbar-trans-color': (location === '/signin') || (location === '/signup') || (location === '/'),
    'navbar-bg-color': (location !== '/signin') && (location !== '/signup') && (location !== '/')
  })

  return (
    <Navbar className={navbarClass}  >
      <NavLink to="/">
        <NavbarBrand>
          COMICFLIX
      </NavbarBrand>
      </NavLink>
      {isLogin ? <Loggedin /> : <LoggedOut />}
    </Navbar>
  )
}

export default NavbarCmp
