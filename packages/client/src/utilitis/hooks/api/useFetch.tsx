import { useState, useEffect, useCallback } from 'react';

import { instance } from '../../axios/instance';

const useFetch = (url: string) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUrl = useCallback(async () => {
    try {
      const { data: fetchedData } = await instance.get(url);
      setData(fetchedData);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchUrl();
  }, [fetchUrl]);

  return [data, loading, error];
};

export default useFetch;
