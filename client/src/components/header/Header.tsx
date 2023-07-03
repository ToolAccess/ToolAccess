import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchToolsByQuery, ITool, RentButton, SearchBar } from '..';
import './Header.css'

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [, setSearchResults] = useState<ITool[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const tools = await fetchToolsByQuery(query);
      console.log('Search results:', tools);
      setSearchResults(tools);
      if (tools.length === 0) {
        navigate('/not-found');
      } else {
        navigate(`/search-results?query=${query}`);
      }
    } catch (error) {
      console.error('Error searching for tools:', error);
    }
  };

  const handleRentTool = () => {
    navigate('/rent-form');
  };

  return (
    <header>
      <h1 className="header__title"> Welcome to ToolAccess </h1>
      <div className="header-content">
        <SearchBar onSearch={handleSearch} />
        <RentButton onRent={handleRentTool} />
      </div>
    </header>
  );
};

export default Header;
