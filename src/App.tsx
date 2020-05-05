import React from 'react'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'
import { Provider } from 'react-redux'
import configureStore from './store'


export const history = createBrowserHistory()

const store = configureStore(history)

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {routes}
      </ConnectedRouter>
    </Provider>

  )
}

export default App