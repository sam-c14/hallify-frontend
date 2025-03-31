import { useState, useEffect, useCallback } from "react";
import { get } from "./axios";

const cache = new Map();

const useFetch = (url, params = {}, options = { useCache: false }) => {
  const { useCache } = options;
  const [data, setData] = useState(
    useCache && cache.get(url) ? cache.get(url) : null
  );
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(!data);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await get(url, params);
      if (useCache) cache.set(url, response); // Store only if caching is enabled
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [url, JSON.stringify(params), useCache]);

  useEffect(() => {
    fetchData(); // Always fetch new data by default
  }, [fetchData]);

  const mutate = async () => {
    cache.delete(url); // Clear cache before fetching
    await fetchData();
  };

  return { data, error, isLoading, mutate };
};

export default useFetch;
