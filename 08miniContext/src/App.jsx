import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Profile from './component/Profile'
import Login from './component/Login'


function App() {
 

  return (
    <UserContextProvider>
      <h1>React with chai </h1>
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}

export default App
