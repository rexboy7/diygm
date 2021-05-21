import { useState, useEffect } from "react";

export async function fetchJson(url) {
  const response = await fetch(url);
  return response.json();
}

export function useFetchURL(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const doFetch = async () => {
      const result = await fetchJson(url);
      setData(result);
    };
    doFetch();
  }, [url]);
  return data;
}

export function useFetchFunction(asyncFunc) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const doFetch = async () => {
      const result = await asyncFunc();
      setData(result);
    };
    doFetch();
  }, [asyncFunc]);
  return data;
}
