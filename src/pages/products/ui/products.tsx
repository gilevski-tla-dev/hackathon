import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../shared/api/products";

export const Products = () => {
  const getProductsQuery = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <>
      <ul>
        {getProductsQuery.data?.map((product) => (
          <li key={product.id}>
            {product.name} {product.description}{" "}
            <img src={product.avatar} alt="" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
