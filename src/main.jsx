import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './css/font-awesome-4.7.0/css/font-awesome.min.css';
import './css/index.css';
import App from './App'
import { Provider } from "react-redux";
import store from "./redux/store";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)