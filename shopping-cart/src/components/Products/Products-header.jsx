import CategoryCard from "./Products-CategoryCard";

const ProductHeader = () => {
	const productsItems = [
		{
			title: "phone",
			bgColor: "#FF3131"
		},
		{
			title: "camera",
			bgColor: "blue"
		},
		{
			title: "laptop",
			bgColor: "Green"
		},
		{
			title: "airpods",
			bgColor: "black"
		}
	]
	return (
		<header className="product-header-container">
			<div className="product-header-title">
				<h2>What are you looking for?</h2>
			</div>
			<div className="product-item-card-container">
				{
					productsItems.map(productsItems => {
						return (
							<CategoryCard data={productsItems}/>
						)
					})
				}
			</div>
		</header>
	)
}

export default ProductHeader;