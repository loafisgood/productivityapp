import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter, Routes,Route } from 'react-router-dom';
import Login from './components/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <HashRouter>
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/" element={<Login/>} />
      </Routes>
    </HashRouter>
  </ChakraProvider>

  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
