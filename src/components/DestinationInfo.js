import DestinationDetails from "./DestinationDetails";
function DestinationInfo({ destination }) {
  return (
    <div className="destinationInfo">
      <div className="container">
        <h2 className="heading headingAnimation">Overview</h2>
        <div className="row">
          <div className="col-8">
            <p className="destinationInfo__p animation">
              {destination.details}
            </p>
          </div>
        </div>
        <div className="heading headingAnimation">Good to know</div>
        <div className="row">
          <div className="col-8">
            <DestinationDetails title="Language" text={destination.language} />
            <DestinationDetails title="Currency" text={destination.currency} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationInfo;
