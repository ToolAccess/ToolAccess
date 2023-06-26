import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ITool, fetchTool } from '.';
import { Navbar } from '..';
import './ToolPage.css';

const ToolPage: React.FC = () => {
  const { id } = useParams();
  const [tool, setTool] = useState<ITool>();

  useEffect(() => {
    const getTool = async () => {
      const fetchedTool = await fetchTool(id as string);
      setTool(fetchedTool);
    };

    getTool();
  }, [id]);

  if (!tool) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar category={tool.category} product={tool.name} />
      <div className="tool-page">
        <h1 className="tool-page__name">{tool.name}</h1>
        <img className="tool-page__image" src={tool.imageUrl} alt={tool.name} />
        <p className="tool-page__description">Description: {tool.description}</p>
        <div className="tool-page__price">Price: {tool.standardPrice} SEK</div>
      </div>
    </div>
  );
};

export default ToolPage;
