import { NavLink } from "react-router-dom";

const CategoryCard = (props) => {
  return (
    <NavLink to={`/products/${props.data.title}`} className="products-category-card">
      <img src={props.data.image} />
      <p>{props.data.title}</p>
    </NavLink>
  )
}

export default CategoryCard;