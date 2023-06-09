import Axios from "../services/api-clients";
import { AxiosError, AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";

export interface dataRes<T> {
  count: number;
  result: T[];
}

const useData = <T,>(endpoint: string, reqConfig?: AxiosRequestConfig, deps?: any) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(
    () => {
      const getData = async () => {
        try {
          const { data } = await Axios.get(endpoint, { ...reqConfig });
          const { results } = data;

          setData(results);
          setLoading(false);
        } catch (err) {
          setError((err as AxiosError).message);
          setLoading(false);
        }
      };
      getData();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
