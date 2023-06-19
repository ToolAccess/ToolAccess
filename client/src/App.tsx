import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ToolListPage from './modules/tool/ToolListPage';
import CategoryPage from './modules/tool/CategoryPage';
import Header from './modules/components/Header';
import Footer from './modules/components/Footer';

const App: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:5246/api/tools/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CategoryPage categories={categories} />} />
        <Route path="/category/:category" element={<ToolListPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
