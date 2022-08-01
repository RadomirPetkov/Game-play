import './App.css';
import { Header } from "./components/Header/Header"
import { Home } from './components/Home/Home';
import { Routes, Route } from 'react-router-dom'
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { CreateGame } from './components/CreateGame/CreateGame';
import { Catalog } from './components/Cataolog/Catalog';
import { useEffect, useState } from "react"
import { getAll } from "./services/gameService"
import { Detatils } from './components/Details/Details';
import { AuthContext } from './contexts/AuthContext';

function App() {

  const [games, setGames] = useState([])
  const [user, setUser] = useState({})

  const saveUser = (userData) => {
    setUser(userData)
  }

  useEffect(() => {
    getAll()
      .then(res => setGames(res))
  }, [])


  return (
    <AuthContext.Provider value={{ saveUser, user }}>
      <div className="App">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home games={games} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/create' element={<CreateGame />} />
            <Route path='/catalog' element={<Catalog games={games} />} />
            <Route path={`/details/:gameId`} element={<Detatils />} />
          </Routes>



        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
