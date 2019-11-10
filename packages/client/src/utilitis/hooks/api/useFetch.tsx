import { useState, useEffect, useContext, useCallback } from 'react';

import { instance } from '../../axios/instance';

import { ErrorHandlerContext } from '../../../providers/ErrorHandlerProvider';

const useFetch = (url: string) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const { open } = useContext(ErrorHandlerContext);

  const fetchUrl = useCallback(async () => {
    try {
      const { data: fetchedData } = await instance.get(url);
      setData(fetchedData);
    } catch ({ message }) {
      open(message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchUrl();
  }, [fetchUrl]);

  return [data, loading];
};

export default useFetch;
