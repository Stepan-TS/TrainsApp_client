import React, { useState } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import './App.scss';
import { HomePage } from './pages/HomePage';
import { PageNotFound } from './pages/PageNotFound';
import { ResultPage } from './pages/ResultPage';
import { Header } from './components/Header';
import axios from 'axios';
import { error } from 'console';
import { addTrain } from './api';
import { ITrain } from './types/ITrain';
import { NewTrain } from './pages/NewTrain';
import { AppProvider } from './components/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
      
        <div className='App-content'>
          <Routes>
            <Route path="/" element={<HomePage />} />
          
            <Route path="newTrain" element={<NewTrain />} />

            <Route path="/trains">
              <Route index element={<ResultPage />} />
              <Route path="/trains/:startCity/:finishCity" element={<ResultPage />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
