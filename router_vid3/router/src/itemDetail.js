import React, {useState, useEffect} from 'react';
import './App.css';


function ItemDetail({match}) {

  useEffect(() => {
      fetchItem();
  }, []);
  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://api.github.com/users/${match.params.id}`);
    const item = await fetchItem.json();
    setItem(item);
  }

  

  return (
    <div>
        <h1>{item.name}</h1>
        <img src={item.avatar_url} alt=""/>
    </div>
  );
}

export default ItemDetail;
