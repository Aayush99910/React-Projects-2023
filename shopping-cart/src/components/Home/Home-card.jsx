export default function Card(props) {
  return (
    <article className="home-phone-container">
      <div className="home-phone-image-container">
        <img src={props.data.imageURL} />
      </div>
      <div className="home-phone-details-container">
        <div>
          <h3 className="title">{props.data.name}</h3>
          <p className="price">{props.data.price}</p>
        </div>
        <p className="description">{props.data.description}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </article>
  )
}