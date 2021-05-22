import { useState } from "react";
import { FormText } from "./FormText";
import { FormTextarea } from "./FormTextarea";
import { addDoc, updateDoc, deleteDoc } from "../../fetcher";

const DB_ACTIVITY = "activities";

export function FormEditActivity(props) {
  const [item, setItem] = useState(props.item);
  const { id, title, image, groupName, description, time } = item;
  function handleChange(evt) {
    const name = evt.target.name;
    setItem({ ...item, [name]: evt.target.value });
  }
  async function handleSubmit() {
    const { id: newId } = id
      ? await updateDoc(DB_ACTIVITY, item)
      : await addDoc(DB_ACTIVITY, item);
    console.log(newId);
    setItem({ ...item, id: newId });
  }
  async function handleDelete() {
    await deleteDoc(DB_ACTIVITY, item.id);
    setItem({ deleted: true });
  }
  return (
    <section className="my-4">
      <div className="row">
        <div className="col-2 text-end">ID:</div>
        <div className="col-2">{id}</div>
      </div>
      <FormText
        onChange={handleChange}
        value={title}
        name="title"
        title="標題"
      />
      <FormText
        onChange={handleChange}
        value={groupName}
        name="groupName"
        title="組織名稱"
      />
      <FormTextarea
        onChange={handleChange}
        value={description}
        name="description"
        title="描述"
      />
      <FormText onChange={handleChange} value={time} name="time" title="時間" />
      <div className="row">
        <button className="col col-md-4 offset-2" onClick={handleSubmit}>
          送出
        </button>
        <button className="col col-md-2" onClick={handleDelete}>
          刪除
        </button>
      </div>
    </section>
  );
}
