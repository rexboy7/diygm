import { useState } from "react";
import { addDoc, updateDoc, deleteDoc } from "../../fetcher";
import { FormText } from "./FormText";
import { FormTextarea } from "./FormTextarea";

const DB_ITEM = "items";
export function FormEditProduct(props) {
  const [product, setProduct] = useState(props.product);

  function handleChange(evt) {
    const name = evt.target.name;
    const newValue =
      name === "tags" ? evt.target.value.split(",") : evt.target.value;

    setProduct({
      ...product,
      [name]: newValue,
    });
  }

  const { id, author, title, enTitle, tags, description, place, facebook } =
    product;

  async function handleSubmit() {
    const result = id
      ? await updateDoc(DB_ITEM, product)
      : await addDoc(DB_ITEM, product);
    product.id = result.id;
    setProduct({ ...product });
  }

  async function handleDelete() {
    await deleteDoc(DB_ITEM, product.id);
    setProduct({ deleted: true });
  }

  if (product.deleted) {
    return <section className="my-4">Successfully deleted.</section>;
  }
  return (
    <section className="my-4">
      <div className="row">
        <div className="col-2 text-end">ID:</div>
        <div className="col-2">{id}</div>
      </div>

      <FormText
        onChange={handleChange}
        value={author}
        name="author"
        title="作者"
      />
      <FormText
        onChange={handleChange}
        value={title}
        name="title"
        title="標題"
      />
      <FormText
        onChange={handleChange}
        value={enTitle}
        name="enTitle"
        title="英文標題"
      />
      <FormText
        onChange={handleChange}
        value={tags?.join(",")}
        name="tags"
        title="英文標籤"
      />
      <FormTextarea
        onChange={handleChange}
        value={description}
        name="description"
        title="描述"
      />
      <FormText
        onChange={handleChange}
        value={place}
        name="place"
        title="英文標籤"
      />
      <FormText
        onChange={handleChange}
        value={facebook}
        name="facebook"
        title="臉書連結"
      />
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
