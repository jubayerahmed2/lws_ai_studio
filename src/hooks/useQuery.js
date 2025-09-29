import { useEffect, useState } from "react";

const useQuery = (defaultValue, url) => {
  const [state, setState] = useState({
    data: defaultValue,
    loading: true,
    error: "",
  });

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw Error("Failed to fetch");
        }

        const data = await response.json();

        if (!ignore) {
          setState((prev) => ({
            ...prev,
            data,
          }));
        }
      } catch (error) {
        setState((prev) => ({
          ...prev,
          error: error?.message || error,
        }));
      } finally {
        setState((prev) => ({
          ...prev,
          loading: false,
        }));
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [url]);

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
  };
};
export default useQuery;
