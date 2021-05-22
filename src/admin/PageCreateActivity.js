import { FormEditActivity } from "./component/FormEditActivity";
import { useState } from "react";

const MAX_CREATE = 10;

const itemTemplate = {
  id: "",
  title: "",
  groupName: "",
  description: "",
  time: "",
};

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

export function PageCreateActivity() {
  const getNextId = useNextId();
  const [newItemIds, setNewItemIds] = useState([getNewId(0)]);

  function appendItem() {
    setNewItemIds([...newItemIds, getNewId(getNextId())]);
  }

  return (
    <article>
      {newItemIds.map((id) => (
        <FormEditActivity key={id} item={itemTemplate} />
      ))}
      <section className="my-4 row">
        <button
          className="offset-2 col col-md-6"
          onClick={appendItem}
          disabled={newItemIds.length >= MAX_CREATE}
        >
          增加新項目
        </button>
      </section>
    </article>
  );
}
