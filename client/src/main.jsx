import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider, Global, css } from '@emotion/react'
import theme from './theme.js'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import './index.css'
import { PersistGate } from "redux-persist/integration/react";
import persistStore from 'redux-persist/es/persistStore'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}></PersistGate>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      </React.StrictMode>
    </Provider>
  </Router>)
