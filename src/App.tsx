import React from 'react'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'
import { Provider } from 'react-redux'
import configureStore from './store'
import './App.css'

export const history = createBrowserHistory()

const store = configureStore(history)

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="container-fluid wrapper p-0">
            {routes}
        </div>
      </ConnectedRouter>
    </Provider>

  )
}

export default App
