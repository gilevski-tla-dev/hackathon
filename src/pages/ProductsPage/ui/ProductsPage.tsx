import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../shared/api/products";
import { ProductCard } from "../../../features/products/ui/ProductCard";
import { IProduct } from "../../../shared/api/products/types";

export const ProductsPage: React.FC = () => {
  const { data, isLoading, error } = useQuery<IProduct[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <div>Загрузка</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }

  return (
    <ul>
      {data?.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductsPage;
