import React from 'react';
import { useParams } from 'react-router-dom';

interface ToolListPageParams extends Record<string, string> {
  category: string;
}

const ProductListPage: React.FC = () => {
  const { category } = useParams<ToolListPageParams>();

  return (
    <div>
      <h1>Product List - {category}</h1>
      {/* Fetch and display the product list */}
    </div>
  );
};

export default ProductListPage;
