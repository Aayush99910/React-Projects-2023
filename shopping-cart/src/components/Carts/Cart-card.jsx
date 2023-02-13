import "../Sharedlayout/Sharedlayout.css"

export default function Card(props) {
  return (
    <article className="item-container">
      <div className="item-image-container">
        <img src={props.data.imageURL} />
      </div>
      <div className="item-details-container">
        <div>
          <h3 className="title">{props.data.name}</h3>
          <p className="price">{props.data.price}</p>
        </div>
        <p className="description">{props.data.description}</p>
        <button className="add-to-cart-button" >Remove from Cart</button>
      </div>
    </article>
  )
}