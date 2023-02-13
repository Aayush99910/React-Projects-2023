export default function AboutCard(props) {
  return (
    <article className="about-card">
      <div className="about-heading card-heading">
        <h2>{props.data.title}</h2>
      </div>
      <p className="about-text">{props.data.description}</p>
      <button className="service-button">{props.data.buttonText}</button>
    </article>
  )
}