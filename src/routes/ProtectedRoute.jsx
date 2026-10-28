import React from 'react'
import { Navigate, renderMatches } from 'react-router-dom';
import Layout from '../components/Layout';

const protectedRoute = ({children}) => {
      const user ="ram";
  return (
<div>{user ? <Layout>{children}</Layout>  : <Navigate to ="/register" />}</div>
  )
}

export default protectedRoute