import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import { fetchToolsByQuery } from '../tool/apis';
import { ITool } from '../tool/interfaces';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [, setSearchResults] = useState<ITool[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const tools = await fetchToolsByQuery(query);
      console.log('Search results:', tools);
      setSearchResults(tools);
      navigate(`/search-results?query=${query}`);
    } catch (error) {
      console.error('Error searching for tools:', error);
    }
  };

  return (
    <header>
      <h1>Welcome to ToolAccess</h1>
      <SearchBar onSearch={handleSearch} />
    </header>
  );
};

export default Header;
