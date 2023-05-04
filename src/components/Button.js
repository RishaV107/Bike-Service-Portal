import '../css/Button.css'
function Button(props) {
  return (
    <a href="https:aa">
      <div className="button">
        <span className="button-text">{props.text}</span>
      </div>
    </a>
  );
}

export default Button;
