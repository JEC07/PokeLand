import * as React from 'react'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import PokemonsHomePage from '../pages/PokemonsHomePage'
import PokemonsTypePage from '../pages/PokemonsTypePage'
import PokemonsAbilityPage from '../pages/PokemonsAbiltyPage'
import PokemonSearchPage from '../pages/PokemonSearchPage'
import NotFoundPage from '../pages/NotFoundPage'
import '../styles/app.css'
import '../styles/appResponsive.css'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} >
            <Route index element={<PokemonsHomePage />} />
            <Route path='types/:typeName' element={<PokemonsTypePage />} />
            <Route path='abilities/:abilityName' element={<PokemonsAbilityPage />} />
            <Route path='search/:pokemonName' element={<PokemonSearchPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
