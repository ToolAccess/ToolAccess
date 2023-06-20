import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ToolListPage from './modules/tool/ToolListPage';
import CategoryPage from './modules/tool/CategoryPage';
import Header from './modules/components/Header';
import Footer from './modules/components/Footer';
import ToolPage from './modules/tool/ToolPage';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/category/:category" element={<ToolListPage />} />
        <Route path="/tools/:id" element={<ToolPage />}/>      
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
