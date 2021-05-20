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

function getNewProduct(id) {
  return {
    ...productTemplate,
    id: `new-${id++}`,
  };
}

function useNextId() {
  const [newId, setNewId] = useState(1);
  return function getNextId() {
    setNewId(newId + 1);
    return newId;
  };
}

const initNewProduct = getNewProduct(0);

export function PageCreateProduct() {
  const [newProducts, setNewProducts] = useState([initNewProduct]);
  const getNextId = useNextId();

  function appendProduct() {
    setNewProducts([...newProducts, getNewProduct(getNextId())]);
  }

  return (
    <article>
      {newProducts.map((product) => (
        <FormEditProduct key={product.id} product={product} />
      ))}
      <section className="my-4 row">
        <button
          className="offset-2 col col-md-6"
          onClick={appendProduct}
          disabled={newProducts.length >= MAX_CREATE}
        >
          Add new item
        </button>
      </section>
    </article>
  );
}
