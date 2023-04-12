import { NavLink } from "react-router-dom";


export const ProductList = ({ product }) => {
  
  return (
    <>
      <h1>Product Listing Page</h1>
      <NavLink to="/cart">My Cart</NavLink>
      <br />
      <NavLink to="/wishlist">My Wishlist</NavLink>
      <ul>
        {product.map(
          ({ id, name, description, price }) => (
            <li key={id}>
              <p>{name}</p>
              <p>Price: {price}</p>
              <NavLink to={`/about/${id}`}>View Details</NavLink> <br/>
              <button>Add to Cart</button>
            </li>
          )
        )}
      </ul>
    </>
  );
};
