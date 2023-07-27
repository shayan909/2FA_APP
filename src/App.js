import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CodeListPage from './components/CodeListPage/CodeListPage';
import AddCodePage from './components/AddCodePage/AddCodePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CodeListPage />} />
        <Route path="/add" element={<AddCodePage />} />
      </Routes>
    </Router>
  );
};

export default App;
