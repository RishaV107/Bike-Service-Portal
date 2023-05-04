import Title from './Title';
import Servicecard from './Servicecard';
import Button from './Button';
import '../css/Service.css'
function Services() {
  return (
    <section className="Services">
      <div className="container">
        <Title
          subject="Our Services"
          
        />
        <div className="Services-content">
          <Servicecard
            src="multi-point.svg"
            title="Multi Point Inspections"
            />
          <Servicecard
            src="auto-repair.svg"
            title="Auto Repair"
              shadow="shadow"
          />
          <Servicecard
            src="auto-maintenance.svg"
            title="Auto Maintenance"
            />
          <Servicecard
            src="tires.svg"
            title="Tires"
            />
          <Servicecard
            src="service-warranty.svg"
            title="Service Warranty"
            />
          <Servicecard
            src="shop-online.svg"
            title="Shop Online"
            />
          <Button text="Learn More" />
        </div>
      </div>
    </section>
  );
}

export default Services;
