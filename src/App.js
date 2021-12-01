import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './page/home';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   let cleanupFunction = false;
  //   async function fetchData() {
  //     try {
  //       setIsLoading(true);
  //       //   setIsLoading(true);
  //       const itemsResponse = await axios.get('http://localhost:9999/products');
  //       //   setIsLoading(false);

  //       setCards(itemsResponse.data);
  //     } catch (err) {
  //       alert('Hе удалось загрузить список');
  //     }
  //     setIsLoading(false);
  //   }
  //   fetchData();
  //   return () => (cleanupFunction = true);
  // }, []);
  return (
    <>
      <Home isLoading={isLoading} />
    </>
  );
}

export default App;
