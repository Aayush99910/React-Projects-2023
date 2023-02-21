import { NavLink } from "react-router-dom";
import Card from "./Home-card";

const HomeForYouCard = (props) => {
  return (
    <div>
			<div className="home-for-you">
				<h2>{props.data.title}</h2>
				<NavLink to={props.data.path}>See all</NavLink>
			</div>
			<section className="items-container">
				{
					props.data.array.map(product => {
						return (
							<Card key={product.id} data={product} addItems={props.addItems} />
						)
					})
				}
			</section>
	  </div>
  )
}

export default HomeForYouCard;