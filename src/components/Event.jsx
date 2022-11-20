import "../style/Event.css";

export default function Event(props) {
  const { key, title, year, month, description } = props;
  return (
    <div className="event">
      <div className="event-content">
        <div className="event-title-and-date">
          <span className="event-circle"> </span>
          <span className="event-year">{year} </span>
          <h4 className="event-title">{title}</h4>
          <h4 className="event-month">{month}</h4>
        </div>

        <p className="event-description">{description}</p>
      </div>
    </div>
  );
}
