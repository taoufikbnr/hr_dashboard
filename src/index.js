import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { FiltersContextProvider } from './context/FiltersContext/FiltersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FiltersContextProvider>
        <App />
    </FiltersContextProvider>
);
