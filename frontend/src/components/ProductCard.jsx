import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL || "http://127.0.0.1:8000";
  return (
   <div>
     <img
       src={`${BASEURL}${product.image}`}
       alt={product.name}
       className="w-full h-56 object-cover rounded-lg mb-4"
     />
     <h2 className="text-lg font-semibold text-gray-800 truncate">
       {product.name}
     </h2>
     <p className="text-gray-600 font-medium">${product.price}</p>
   </div>
  );
}

export default ProductCard;