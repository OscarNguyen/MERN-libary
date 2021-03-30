import React from 'react'
import { Route, Redirect } from 'react-router-dom'
type PrivateRoutePropsType = {
  component: any
  isLogin: boolean
  path: string
}


const PrivateRoute: React.FC<PrivateRoutePropsType> = ({ component: Component, isLogin, ...rest }) => {
  return (
    <Route {...rest} render={props => isLogin ? <Component {...props} /> : <Redirect to="/signin" />} />
  )
}

export default PrivateRoute
