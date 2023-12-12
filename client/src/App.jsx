import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ConfigRoutes from './config/routes'
import { Provider } from 'react-redux'
import store from './app/store'



function App() {

  return (
    <Provider store={store}>
      <ConfigRoutes />
    </Provider>
  )
}

export default App
