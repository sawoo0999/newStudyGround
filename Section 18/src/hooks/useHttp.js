import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

//Get
async function sendHttpRequest(url, config) {
  const res = await fetch(url, config);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(
      data.message || "Something went wrong, failed to send request"
    );
  }

  return data;
}

export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  //Clear
  function clearData() {
    setData(initialData);
  }

  //PUT
  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest(url, { ...config, body: data });
        setData(resData);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  //Get 유효성 검사
  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
  };
}
