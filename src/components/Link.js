import '../css/Link.css'
function Link(props) {
  return (
    <a href="#" className="Link">
      <span className="Link-text">{props.text}</span>
      <img src="/red-arrow.png" alt="q" className={props.class} />
    </a>
  );
}

export default Link;
