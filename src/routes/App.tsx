import * as React from 'react'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import PokemonsHomePage from '../pages/PokemonsHomePage'
import '../styles/app.css'
import '../styles/appResponsive.css'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} >
            <Route index element={<PokemonsHomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
