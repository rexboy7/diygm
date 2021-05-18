import { activitiesData } from "../data/activitiesData.js";

export function Activities() {
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
          </div>
        ))}
      </div>
    </article>
  );
}
