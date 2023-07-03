import React from 'react';
import './ToolCard.css';
import { ITool } from '..';

interface ToolCardProps {
  tool: ITool;
  onClick: () => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onClick }) => (
  <div className="tool-card" onClick={onClick}>
    <h2 className="tool-card__name">{tool.name}</h2>
    <img className="tool-card__image" src={tool.imageUrl} alt={tool.name} />
    <div className="tool-card__price">Price: {tool.standardPrice} SEK</div>
  </div>
);

export default ToolCard;
