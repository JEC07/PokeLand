import * as React from 'react'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { BrowserRouter, Routes } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
