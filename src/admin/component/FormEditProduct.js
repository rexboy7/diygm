import { useState } from "react";
import { addItem, updateItem, deleteItem } from "../../fetcher";

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
    const result = id ? await updateItem(product) : await addItem(product);
    product.id = result.id;
    setProduct({ ...product });
  }

  async function handleDelete() {
    await deleteItem(product.id);
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

      <div className="row">
        <span className="col-2 text-end">作者</span>
        <input
          className="col col-md-6"
          type="text"
          value={author}
          name="author"
          onChange={handleChange}
        />
      </div>
      <div className="row">
        <span className="col-2 text-end">標題</span>
        <input
          className="col col-md-6"
          type="text"
          value={title}
          name="title"
          onChange={handleChange}
        />
      </div>
      <div className="row">
        <span className="col-2 text-end">英文標題</span>
        <input
          className="col col-md-6"
          type="text"
          value={enTitle}
          name="enTitle"
          onChange={handleChange}
        />
      </div>
      <div className="row">
        <span className="col-2 text-end">標籤</span>
        <input
          className="col col-md-6"
          type="text"
          value={tags?.join(",")}
          name="tags"
          onChange={handleChange}
        />
      </div>
      <div className="row">
        <span className="col-2 text-end">描述</span>
        <br />
        <textarea
          className="col col-md-6"
          rows="10"
          cols="40"
          value={description}
          name="description"
          onChange={handleChange}
        />
      </div>
      <div className="row">
        <span className="col-2 text-end">攤位號碼</span>
        <input
          className="col col-md-6"
          type="textarea"
          value={place}
          name="place"
          onChange={handleChange}
        />
      </div>
      <div className="row">
        <span className="col-2 text-end">臉書連結</span>
        <input
          className="col col-md-6"
          type="textarea"
          value={facebook}
          name="facebook"
          onChange={handleChange}
        />
      </div>
      <div className="row">
        <button className="col col-md-4 offset-2" onClick={handleSubmit}>
          送出
        </button>
        <button className="col col-md-1" onClick={handleDelete}>
          刪除
        </button>
        <button className="col col-md-1">插入</button>
      </div>
    </section>
  );
}
