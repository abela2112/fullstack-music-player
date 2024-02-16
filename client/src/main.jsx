import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import persistStore from 'redux-persist/es/persistStore'
import { PersistGate } from "redux-persist/integration/react"
import App from './App.jsx'
import './index.css'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}></PersistGate>
      <React.StrictMode>

        <App />

      </React.StrictMode>
    </Provider>
  </Router>)
