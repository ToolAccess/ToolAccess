import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CategoryPage, Footer, Header, RentForm, ToolListPage, ToolPage } from '.';
import ToolNotFound from './components/tools/ToolNotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/category/:category" element={<ToolListPage />} />
        <Route path="/tools/:id" element={<ToolPage />}/>
        <Route path="/search-results" element={<ToolListPage />} />
        <Route path="/not-found" element={<ToolNotFound />} />
        <Route path="/rent-form" element={<RentForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
