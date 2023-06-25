import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CategoryPage, Footer, Header, ToolListPage, ToolPage } from '.';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/category/:category" element={<ToolListPage />} />
        <Route path="/tools/:id" element={<ToolPage />}/>
        <Route path="/search-results" element={<ToolListPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
