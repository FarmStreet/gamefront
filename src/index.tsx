import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import {setupStore} from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore()

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <HashRouter>
              <App />
          </HashRouter>
      </Provider>
  </React.StrictMode>
);