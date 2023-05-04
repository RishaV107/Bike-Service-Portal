import '../css/ServiceCard.css'
function Servicecard(props) {
  return (
    <div className="Servicecard">
      <img src={props.src} alt="" className="Minicard-icon" />
      <div className="Minicard-content Servicecard-content">
        <h4 className="Minicard-content-title Servicecard-content-title">
          {props.title}
        </h4>
         
      </div>
    </div>
  );
}
export default Servicecard;
