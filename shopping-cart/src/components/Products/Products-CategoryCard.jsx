import { NavLink } from "react-router-dom";

const CategoryCard = (props) => {
  const backgroundColor = props.data.bgColor;
  return (
    <NavLink to={`/products/${props.data.title}`} className="products-category-card" style={{backgroundColor: backgroundColor, color: "white"}}>
      {props.data.title}
    </NavLink>
  )
}

export default CategoryCard;