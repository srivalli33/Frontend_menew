import React, { useState } from 'react';
import axios from 'axios';
import './AdminPanel.css';

const AddMenuItem = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [bestSeller, setBestSeller] = useState(''); // Update to handle string
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Store Base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const menuItem = {
      name,
      price,
      category,
      bestSeller: bestSeller === 'Yes', // Convert to boolean
      description,
      image,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/menuitems', menuItem);
      if (response.status === 201) {
        alert('Menu item added successfully!');
        // Reset form
        setName('');
        setPrice('');
        setCategory('');
        setBestSeller('');
        setDescription('');
        setImage('');
      }
    } catch (error) {
      console.error('Error adding menu item:', error);
      alert('An error occurred while adding the menu item.');
    }
  };

  return (
    <div className="add-menu-item">
      <h3>Add Menu Item</h3>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name" // Unique id for the input
          name="name" // Name attribute for form data handling
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          id="price" // Unique id for the input
          name="price" // Name attribute for form data handling
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <label htmlFor="category">Category:</label>
        <select
          id="category" // Unique id for the select
          name="category" // Name attribute for form data handling
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </select>

        <label htmlFor="bestSeller">Best Seller:</label>
        <select
          id="bestSeller" // Unique id for the select
          name="bestSeller" // Name attribute for form data handling
          value={bestSeller}
          onChange={(e) => setBestSeller(e.target.value)}
          required
        >
          <option value="">Select Best Seller</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label htmlFor="description">Description:</label>
        <textarea
          id="description" // Unique id for the textarea
          name="description" // Name attribute for form data handling
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="image">Image:</label>
        <input
          id="image" // Unique id for the file input
          name="image" // Name attribute for form data handling
          type="file"
          onChange={handleImageChange}
          required
        />
        {image && <img src={image} alt="Preview" style={{ width: '100px' }} />}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddMenuItem;
