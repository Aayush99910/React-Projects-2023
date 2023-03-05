import "../Sharedlayout/Sharedlayout.css"

export default function Card(props) {
  return (
    <article className="cart-item-container" id={props.data.id}>
      <div className="cart-item-image-details-container">
        <div className="cart-item-image-container">
          <img src={props.data.imageURL} />
        </div>
        <div className="cart-item-details-container">
          <h3>{props.data.name}</h3>
          <p>{props.data.description}</p>
          <button className="remove-button" onClick={props.removeItems}>Remove from Cart</button>
          </div>
      </div>
      <div>
        <div className="cart-item-price">
          <p>{props.data.price}</p>
        </div>
        <div className="counter-container"> 
              <button onClick={props.increaseOrDecreaseItem} className="decrease">-</button>
              <p>{props.data.count}</p>
              <button onClick={props.increaseOrDecreaseItem} className="increase">+</button>
        </div>
      </div>
    </article>
  )
}