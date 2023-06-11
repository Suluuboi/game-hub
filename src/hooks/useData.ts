import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

export interface IFetchResponse<T> {
  count: number;
  results: T[];
}

function useData<T>(endpoit: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<IFetchResponse<T>>(endpoit, { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setData(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort(); //abort if moving from page
  }, []);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //     setData(genreDummyData.genre_dummy.results);
  //   }, 2000);
  // }, []);

  return { data, error, loading };
}

export default useData;
