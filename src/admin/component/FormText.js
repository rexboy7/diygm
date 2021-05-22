export function FormText(props) {
  const { onChange, value, title, name } = props;
  return (
    <div className="row">
      <span className="col-2 text-end">{title}</span>
      <input
        className="col col-md-6"
        type="text"
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}
