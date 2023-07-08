import React from "react";

function useLocalStorage(itemName, initValue) {

    //Estados
    const [item, setItem] = React.useState(initValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {

     setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initValue));
          parsedItem = initValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);

      } catch (error) {
        setLoading(false);
        setError(true);
      };
     }, 2000);      
    }, []);

    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    };

    return {
      item, 
      saveItem, 
      loading, 
      error
    };
  }

  export { useLocalStorage }

  // localStorage.removeItem('TODOS_V1')
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Cortar tomate', completed: false },
//   { text: 'Cortar pepino', completed: false },
//   { text: 'Cortar nuevo', completed: false },
//   { text: 'Usar esatados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))