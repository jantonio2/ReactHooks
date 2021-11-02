import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {

  const isMounted = useRef(true);
  const [state, setState] = useState({data: null, loading: true, error: null});

  useEffect(() => {
    
    return () => {
      isMounted.current = false;
    }
  }, []);

  useEffect(() => {
    setState({data: null, loading: true, error: null});
    // fetch(url)
    //   .then(resp => resp.json())
    //   .then(data => {
    //     if(isMounted.current){
    //       setState({
    //         loading: false,
    //         error: null,
    //         data
    //       })
    //     }  
    //   })
    //   .catch(() => {
    //     if(isMounted.current){
    //       setState({
    //         loading: false,
    //         error: 'No se pudo cargar la info',
    //         data: null
    //       })
    //     }
    //   });
    const getData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        if(isMounted.current){
          setState({
            loading: false,
            error: null,
            data: json
          });
        } else {
          console.log('No se llamo');
        }
      } catch (e) {
        if(isMounted.current){
          setState({
          loading: false,
          error: 'No se pudo cargar la info',
          data: null
          })
        }
      }
    };

    getData();
  }, [url]);

  return state;
}
