import { useFetchFunction } from "../utils";
import { fetchList } from "../fetcher";

const DB_ACTIVITY = "activities";
const fetchActivityList = () => fetchList(DB_ACTIVITY);
export function Activities() {
  const activitiesData = useFetchFunction(fetchActivityList) || [];

  return (
    <article className="container-xl">
      <h1 className="col-12 display-1 text-center my-5">現場交流活動</h1>
      <div className="row">
        {activitiesData.map((activity) => (
          <div className="col-4 text-center">
            <img src={activity.image} />
            <h4 className="m-3">{activity.title}</h4>
            <p className="text-success">{activity.groupName}</p>
            <p className="text-secondary keep-wrap">{activity.description}</p>
            <h6>{activity.time}</h6>
          </div>
        ))}
      </div>
    </article>
  );
}
