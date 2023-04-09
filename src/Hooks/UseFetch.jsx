import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [mainData, setMainData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);

        if (!req.ok) {
          throw new Error("Xatolik yuz berdi!");
        }
        const data = await req.json();
        setData(data);
        setMainData(data);
        setIsPending(false);
      } catch (err) {
        console.log(err.message);
        setIsPending(false);
        setError(err.message);
      }
    };
    getData();
  }, [url]);

  // Delete item
  const deleteOperation = (id) => {
    const filteredDelete = data.results.filter((item) => {
      return item.email !== id;
    });

    setData({ results: filteredDelete });
  };

  // Search
  const searchData = (inputName) => {
    if (inputName.trim()) {
      const searchData = mainData.results.filter((item) => {
        const name = `${item.name.title}${item.name.first}${item.name.last}`
          .trim()
          .toLowerCase();
        return name.includes(inputName.trim().toLowerCase());
      });
      setData({ results: searchData });
    } else {
      setData(data);
    }
  };

  // Refresh

  const refresh = () => {
    const newData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);

        if (!req.ok) {
          throw new Error("Xatolik yuz berdi!");
        }
        const data = await req.json();
        setData(data);
        setIsPending(false);
      } catch (err) {
        console.log(err.message);
        setIsPending(false);
        setError(err.message);
      }
    };
    newData();
  };

  return {
    data,
    error,
    isPending,
    deleteOperation,
    setData,
    searchData,
    refresh,
  };
};

export { UseFetch };
