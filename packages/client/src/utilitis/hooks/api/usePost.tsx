import { useState, useEffect } from 'react';

import { instance } from '../../axios/instance';

const usePost = (url: string, body: any) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const post = async () => {
    try {
      const { data: fetchedData } = await instance.post(url, body);
      setData(fetchedData);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    post();
  }, []);

  return [data, loading, error];
};

export default usePost;
