import { Navigate } from 'react-router-dom'

const publicRoute = ({children}) => {
    const user=null;
  return (
    <div>{user ? <Navigate to="/" />: children}</div>
  )
}

export default publicRoute