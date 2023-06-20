import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ITool } from './interfaces';
import { fetchTool } from './apis';

const ToolPage: React.FC = () => {
  const { id } = useParams();
  const [tool, setTool] = useState<ITool | null>(null);

  useEffect(() => {
    const getTool = async () => {
      try {
        const fetchedTool = await fetchTool(id as string);
        setTool(fetchedTool);
      } catch (error) {
        console.error('Error fetching tool:', error);
      }
    };

    getTool();
  }, [id]);

  if (!tool) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{tool.name}</h1>
      <img src={tool.imageUrl} alt={tool.name} />
      <p>{tool.description}</p>
    </div>
  );
};

export default ToolPage;
