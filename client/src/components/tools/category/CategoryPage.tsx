import { useState, useEffect } from 'react';
import home from '../../../assets/home.png';
import './CategoryPage.css';
import { CategoryCard, fetchCategories } from '..';


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

const CategoryPage = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const getCategories = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleCategoryClick = (category: string) => {
    window.location.href = `/category/${encodeURIComponent(category)}`;
  };

  return (
    <div>
      <h1>Our Categories</h1>
      <div className="category-list">
        {categories.map((category) => (
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

export default CategoryPage;
