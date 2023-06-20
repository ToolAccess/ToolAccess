import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ToolListPage from './modules/tool/ToolListPage';
import CategoryPage from './modules/tool/CategoryPage';
import Header from './modules/components/Header';
import Footer from './modules/components/Footer';
import { fetchCategories, fetchTools } from './services/apis';
import { ITool } from './modules/tool/interfaces';

const App: React.FC = () => {
  const [categories, setCategories] = useState<string[] | undefined>([]);
  const [tools, setTools] = useState<ITool[] | undefined>([]);

  const getCategories = async () => {
    const categories = await fetchCategories();
    setCategories(categories);
  }

  const getTools = async () => {
    const fetchedTools = await fetchTools();
    setTools(fetchedTools);
  }

  useEffect(() => {
    getCategories();
    getTools();
  }, []);

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
