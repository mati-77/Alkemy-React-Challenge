import Login from './Vistas/Login/Login';
import Home from './Vistas/Home/Home';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Axios from 'axios';
import { deleteToken, getToken, setToken } from './Helpers/auth-helpers';

function App() {


  async function login(valoresParaLogin) {
    try {
      const { data } = await Axios.post("http://challenge-react.alkemy.org", valoresParaLogin)
      setToken(data.token)
      console.log(data)
      setCargandoUsuario(true)
    } catch(error) {
        alert('Email o contraseña incorrectos')
    }
  }

  function logout() {
    deleteToken()
  }

  
  const [cargandoUsuario, setCargandoUsuario] = useState(true)


  useEffect(() => {
    if(!getToken()) {
      console.log('no hay token')
      setCargandoUsuario(false)
    } else {
      console.log('SI hay token')
      setCargandoUsuario(true)
    }
  }, [cargandoUsuario])

  function LogoutRoutes({login}) {
    return(
      <Switch>
        <Route path='/' render={props => <Login {...props} login={login} />} default/>
      </Switch>
    )
  }
  
  function LoginRoutes() {
    return(
      <Switch>
        <Route path='/' component={() => <Home />}/>
      </Switch>
    )
  }

  return (
    <Router>
      <main>
        {cargandoUsuario ? <LoginRoutes /> : <LogoutRoutes login={login}/>}
      </main>
    </Router>
  );
}

export default App;
