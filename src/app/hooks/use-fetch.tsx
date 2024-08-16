import { useState } from "react";

// Define a generic type that allows flexibility for the return types of the hook
function useFetch<T>(
  cb: (options: any, ...args: any[]) => Promise<T>,
  options: Record<string, any> = {}
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fn = async (...args: any[]) => {
    setLoading(true);
    setError(null);
    try {
      const response = await cb(options, ...args);
      setData(response);
    } catch (error) {
      setError(error as Error); // Casting error to Error type
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn };
}

export default useFetch;
