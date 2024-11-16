import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../shared/api/products";
import { IProduct } from "../../../shared/api/products/types";

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: product,
    isLoading,
    error,
  } = useQuery<IProduct>({
    queryKey: ["product", id],
    queryFn: () => getProductById(id!),
    enabled: !!id, // Только выполнять запрос, если ID существует
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Error fetching product</div>;
  }

  return (
    <div>
      {product ? (
        <div>
          <img src={product.avatar} alt={product.name} />
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Author: {product.author}</p>
        </div>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
};

export default ProductDetailPage;
