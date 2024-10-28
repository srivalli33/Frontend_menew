import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Menu.css';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/menuitems');
      if (response.status === 200) {
        setMenuItems(response.data);
      }
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  };
  

  return (
    <div className="menu-container">
      <h2>Menu</h2>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item._id} className="menu-item">
            {item.image ? (
              <img
                src={item.image} // Display Base64 image directly
                alt={item.name}
                className="menu-item-image"
              />
            ) : (
              <div className="no-image">No Image Available</div>
            )}
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
