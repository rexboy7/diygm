import { useFetchURL } from "../utils";
import { API_DOMAIN } from "../env";

const ENDPOINT = `${API_DOMAIN}/partners`;

export function Partners() {
  const partnersData = useFetchURL(ENDPOINT)?.data || [];

  return partnersData.map((group) => (
    <section className="row offset-lg-3 text-center " key={group.id}>
      <GroupTitle title={group.name} />
      <PartnersList
        partners={group.partners}
        columnPerRow={group.columnPerRow}
      />
    </section>
  ));
}

function GroupTitle(props) {
  return props.title ? (
    <h2 className="col-lg-8 display-3 text-center">{props.title}</h2>
  ) : null;
}

function PartnersList(props) {
  const { partners, columnPerRow } = props;
  const colClass = `col col-lg-${8 / columnPerRow}`;
  if (!partners) {
    return null;
  }
  return partners.map((partner) => (
    <section className={colClass} key={partner.id}>
      <h4>
        <a href={partner.link}>{partner.name}</a>
      </h4>
      <p>{partner.description}</p>
    </section>
  ));
}
