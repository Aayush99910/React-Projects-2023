export default function Card(props) {
  return (
    <article id={props.data.id} className="item-container">
      <div className="item-image-container">
        <img src={props.data.imageURL} />
      </div>
      <div className="item-details-container">
        <div>
          <h3 className="title">{props.data.name}</h3>
          <p className="price">{props.data.price}</p>
        </div>
        <p className="description">{props.data.description}</p>
        <button className="add-to-cart-button" onClick={props.addItems}>Add to Cart</button>
      </div>
    </article>
  )
}