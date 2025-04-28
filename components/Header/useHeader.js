import { useState, useEffect } from 'react';
import { useNextFetch } from '@/customHooks/useNextFetch';

export const useHeader = () => {
  const [parsedData, setParsedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await useNextFetch('/api/menu');
        const parsed = JSON.parse(data);
        setParsedData(parsed);
      } catch (error) {
        console.error('Error in useHeader:', error);
      }
    };

    fetchData();
  }, []);

  return { parsedData };
};
