import React, { useState, useEffect } from 'react';

// use custom hooks
const useApiData = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  }, []);

  return { error, isLoaded, items };
};

const ApiData = () => {
    const { error, isLoaded, items } = useApiData();

    if(error){
        return <div>{error.message}</div>
    } else if(!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <>
                <h3>API Data Representation</h3>
                <div className="table_content">
                    <table>
                        <thead>
                            <tr><th>Nation</th><th>Population</th><th>Year</th></tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item.Year}><td>{item.Nation}</td><td>{item.Population}</td><td>{item.Year}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>    
        )
    }
}

export default ApiData;
