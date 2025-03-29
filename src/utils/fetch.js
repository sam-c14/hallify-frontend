import { useState, useEffect, useCallback } from "react";
import { get } from "./axios";

const cache = new Map();

const useFetch = (url, params = {}, options = {}) => {
  const [data, setData] = useState(cache.get(url) || null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(!cache.has(url));

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await get(url, params);
      cache.set(url, response);
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [url, JSON.stringify(params)]);

  useEffect(() => {
    if (!cache.has(url)) {
      fetchData();
    }
  }, [fetchData]);

  const mutate = async () => {
    cache.delete(url);
    await fetchData();
  };

  return { data, error, isLoading, mutate };
};

export default useFetch;
