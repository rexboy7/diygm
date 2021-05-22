import { FormEditActivity } from "./component/FormEditActivity";
import { Pager } from "./component/Pager";
import { useRouteMatch } from "react-router-dom";
import { useFetchFunction } from "../utils";
import { fetchList } from "../fetcher";

const PER_PAGE = 5;
const DB_ACTIVITY = "activities";

const fetchItemList = () => fetchList(DB_ACTIVITY);
export function PageEditActivities(props) {
  const { page } = props;
  const activitiesData = useFetchFunction(fetchItemList) || [];
  const maxPage = Math.ceil(activitiesData.length / PER_PAGE);
  const entryStart = (page - 1) * PER_PAGE;
  const pagedActivitiesData = activitiesData.slice(
    entryStart,
    entryStart + PER_PAGE
  );

  const match = useRouteMatch();
  return (
    <article>
      <h3>編輯活動內容</h3>
      <Pager page={page} maxPage={maxPage} baseUrl={`${match.path}`} />
      {pagedActivitiesData.map((item) => (
        <FormEditActivity item={item} key={item.id} />
      ))}
      <Pager page={page} maxPage={maxPage} baseUrl={`${match.path}`} />
    </article>
  );
}
