import { FormEditProduct } from "./component/FormEditProduct";
import { useState } from "react";

const MAX_CREATE = 10;

const productTemplate = {
  id: "",
  author: "",
  title: "",
  enTitle: "",
  tags: [],
  description: "",
  place: "",
  facebook: "",
};

let id = 1;

function getNewId(id) {
  return `new-${id++}`;
}

function useNextId() {
  const [newId, setNewId] = useState(1);
  return function getNextId() {
    setNewId(newId + 1);
    return newId;
  };
}

export function PageCreateProduct() {
  const getNextId = useNextId();
  const [newProductIds, setNewProductIds] = useState([getNewId(0)]);

  function appendProduct() {
    setNewProductIds([...newProductIds, getNewId(getNextId())]);
  }

  return (
    <article>
      {newProductIds.map((id, idx) => (
        <FormEditProduct key={id} product={productTemplate} />
      ))}
      <section className="my-4 row">
        <button
          className="offset-2 col col-md-6"
          onClick={appendProduct}
          disabled={newProductIds.length >= MAX_CREATE}
        >
          增加新項目
        </button>
      </section>
    </article>
  );
}
