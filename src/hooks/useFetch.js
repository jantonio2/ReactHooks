import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [state, setState] = useState({data: null, loading: true, error: null});

  useEffect(() => {
    // fetch(url)
    //   .then(resp => resp.json())
    //   .then(data => {
    //     setState({
    //       loading: false,
    //       error: null,
    //       data
    //     })  
    //   });
    const getData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setState({
        loading: false,
        error: null,
        data: json
      });
    };

    getData();
  }, [url]);

  return state;
}
