function Title(props) {
  return (
    <div className="Title">
      <div className="Title-subject txt" >
        <img src="/overline.svg" alt="" />
        <span>{props.subject}</span>
      </div>
      <h2 className="Title-title">{props.title}</h2>
    </div>
  );
}

export default Title;
