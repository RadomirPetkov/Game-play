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
import { Logout } from './components/Logout/Logout';
import { GameContext } from './contexts/GameContext';

function App() {

  const [games, setGames] = useState([])
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('user')) || "{}"
  })

  const saveUser = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData))
    console.log(`Succsessful login as: ${userData.email}`);
    setUser(userData)
  }
  const logoutUser = () => {
    setUser({})
  }

  useEffect(() => {
    getAll()
      .then(res => setGames(res))
  }, [])

  const updateGames = (data) =>{
    setGames(data)
  }

  return (
    <AuthContext.Provider value={{ saveUser, user, logoutUser }}>
      <GameContext.Provider value={{games, updateGames}}>
        <div className="App">
          <Header />
          <main id="main-content">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/create' element={<CreateGame />} />
              <Route path='/catalog' element={<Catalog />} />
              <Route path={`/details/:gameId`} element={<Detatils />} />
            </Routes>



          </main>
        </div>
      </GameContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
