  import React, { useState, useEffect } from 'react';
  import { useParams, useLocation, useNavigate } from 'react-router-dom';
  import { ITool, ToolCard, fetchTools, fetchToolsByQuery } from '.';
  import { Navbar } from '..';
  import './ToolListPage.css';

  interface ToolListPageParams extends Record<string, string> {
    category: string;
  }

  const ToolListPage: React.FC = () => {
    const { category } = useParams<ToolListPageParams>();
    const location = useLocation();
    const navigate = useNavigate();
    const [tools, setTools] = useState<ITool[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        if (location.search) {
          const searchParams = new URLSearchParams(location.search);
          const query = searchParams.get('query');
          if (query) {
            const searchResults = await fetchToolsByQuery(query);
            setTools(searchResults);
          }
        } else {
          const fetchedTools = await fetchTools();
          const filteredTools = fetchedTools.filter((tool) => tool.category === category);
          setTools(filteredTools);
        }
      };

      fetchData();
    }, [category, location.search]);

    const handleToolClick = (tool: ITool) => {
      navigate(`/tools/${tool.id}`);
    };

    return (
      <div>
        {location.search ? (
          <h1>Search Results</h1>
        ) : (
          <h1>Product List - {category}</h1>
          
        )}
        <Navbar category={category} />
        <div className="tool-list">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} onClick={() => handleToolClick(tool)} />
          ))}
        </div>
      </div>
    );
  };

  export default ToolListPage;
