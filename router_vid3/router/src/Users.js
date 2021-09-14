import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(`https://api.github.com/users`);
    const items = await data.json();
    console.log(items);
    setItems(items);
  }
  const [items, setItems] = useState([]);

  return (
    <div>
        {items.map(item => (
          <h1 key={item.login}>
            <Link to={`/shop/${item.login}`}>{item.login}</Link></h1>
        ))}
    </div>
  );
}

export default Shop;
