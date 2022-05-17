import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from "./global-styles";
import './index.css';
import Page from './components/Page/Page';
import { Home } from './pages/home/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Page>
      <Home />
    </Page>
  </React.StrictMode>
);
