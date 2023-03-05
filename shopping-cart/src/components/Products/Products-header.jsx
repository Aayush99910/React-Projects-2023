import CategoryCard from "./Products-CategoryCard";

const ProductHeader = () => {
	const productsItems = [
		{
			id: 0,
			title: "phone",
			bgColor: "#FF3131",
			image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
		},
		{
			id: 1,
			title: "camera",
			bgColor: "blue",
			image: "https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
		},
		{
			id: 2,
			title: "laptop",
			bgColor: "Green",
			image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
		},
		{
			id: 3,
			title: "airpods",
			bgColor: "black",
			image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=383&q=80"
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