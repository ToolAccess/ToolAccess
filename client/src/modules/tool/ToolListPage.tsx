import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ITool } from './interfaces';
import { fetchTools } from './apis';
import ToolCard from './ToolCard';

interface ToolListPageParams extends Record<string, string> {
  category: string;
}

const ProductListPage: React.FC = () => {
  const { category } = useParams<ToolListPageParams>();
  const navigate = useNavigate();
  const [tools, setTools] = useState<ITool[]>([]);

  useEffect(() => {
    const getTools = async () => {
        const fetchedTools = await fetchTools();
        const filteredTools = fetchedTools.filter((tool) => tool.category === category);
        setTools(filteredTools);
    };

    getTools();
  }, [category]);

  const handleToolClick = (tool: ITool) => {
    navigate(`/tools/${tool.id}`);
  };

  return (
    <div>
      <h1>Product List - {category}</h1>
      <div className="tool-list">
        {tools.map((tool) => (
          <ToolCard
            key={tool.id}
            tool={tool}
            onClick={() => handleToolClick(tool)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
