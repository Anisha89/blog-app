import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { AuthContext } from '../context/AuthContext'


const protectedRoute = ({children}) => {
      const {user} = useContext(AuthContext);
  return (
<div>{user ? <Layout>{children}</Layout>  : <Navigate to ="/register" />}</div>
  )
}

export default protectedRoute