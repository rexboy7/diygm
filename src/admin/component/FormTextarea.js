export function FormTextarea(props) {
  const { onChange, value, title, name } = props;
  return (
    <div className="row">
      <span className="col-2 text-end">{title}</span>
      <textarea
        className="col col-md-6"
        rows="10"
        cols="40"
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}
