import React from 'react';
import './CategoryCard.css'

interface CategoryCardProps {
  category: string;
  imageSrc: string;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, imageSrc, onClick }) => (
  <article className="category-card" onClick={onClick}>
    <div className="category-card__image-container">
      <img className="category-card__image" src={imageSrc} alt={category} />
    </div>
    <h2 className="category-card__title">{category}</h2>
  </article>
);

export default CategoryCard;