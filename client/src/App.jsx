import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, price: parseFloat(price) };

    try {
      const response = await fetch('http://backend.my-app.in:5000/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        alert('Product added successfully!');
        setName('');
        setPrice('');
      } else {
        alert('Failed to add product.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error connecting to server.');
    }
  };

  return (
    <div className="App">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default App;
