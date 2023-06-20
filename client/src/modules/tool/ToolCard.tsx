import React from 'react';
import { ITool } from './interfaces';

interface ToolCardProps {
  tool: ITool;
  onClick: () => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onClick }) => (
  <div className="tool-card" onClick={onClick}>
    <h2>{tool.name}</h2>
    <img src={tool.imageUrl} alt={tool.name} />
  </div>
);

export default ToolCard;
