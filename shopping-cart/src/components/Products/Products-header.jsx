import CategoryCard from "./Products-CategoryCard";

const ProductHeader = () => {
	const productsItems = [
		{
			id: 0,
			title: "phone",
			bgColor: "#FF3131"
		},
		{
			id: 1,
			title: "camera",
			bgColor: "blue"
		},
		{
			id: 2,
			title: "laptop",
			bgColor: "Green"
		},
		{
			id: 3,
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
							<CategoryCard key={productsItems.id} data={productsItems}/>
						)
					})
				}
			</div>
		</header>
	)
}

export default ProductHeader;