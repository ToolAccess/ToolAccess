import { useState, useEffect } from 'react';
import home from '../../../../assets/home.png';
import './CategoryPage.css';
import { useNavigate } from 'react-router-dom';
import { fetchCategories } from '../..';
import { CategoryCard } from '..';


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
  const navigate = useNavigate();

  const getCategories = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleCategoryClick = (category: string) => {
    navigate(`/category/${encodeURIComponent(category)}`);
  };

  return (
    <div>
      <h1 className="categories-title">Explore by purpose and find the right tool:</h1>
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
