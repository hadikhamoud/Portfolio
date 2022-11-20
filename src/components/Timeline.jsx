import "../style/Timeline.css";
import Event from "./Event";
import { ListedEvents } from "../data/data";
function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-content">
        <h2 className="timeline-title">
          <u>Timeline</u>
        </h2>
        {ListedEvents.map((event) => {
          return (
            <Event
              key={event["title"]}
              title={event["title"]}
              year={event["year"]}
              month={event["month"]}
              description={event["description"]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Timeline;
