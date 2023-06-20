import React from 'react';
import CategoryCard from './CategoryCard';
import home from '../../assets/home.png';
import './CategoryPage.css'
interface CategoryPageProps {
  categories: string[] | undefined;
}

const getImageSource = (category: string): string => {
  switch (category) {
    case 'Construction & Tools':
      return home;
    case 'Home & Garden':
      return home;
    case 'Other':
      return home;
    default:
      return '';
  }
};

const CategoryPage: React.FC<CategoryPageProps> = ({ categories }) => {
  return (
    <div>
      <h1>Our Categories</h1>
      <div className="category-list">
        {categories?.map((category) => (
          <CategoryCard
            key={category}
            category={category}
            imageSrc={getImageSource(category)}
            onClick={() => handleCategoryClick(category)}
          />
        ))}
      </div>
    </div>
  );
};

const handleCategoryClick = (category: string) => {
  window.location.href = `/category/${encodeURIComponent(category)}`;
};

export default CategoryPage;