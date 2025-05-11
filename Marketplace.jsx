import { Link } from "react-router-dom";
import wheatImg from '../assets/images/wheat.jpeg';
import riceImg from '../assets/images/rice.jpeg';
import cornImg from '../assets/images/corn.jpeg';
import tomatoImg from '../assets/images/tomato.jpeg';
import mangoImg from '../assets/images/mango.jpeg';
import appleImg from '../assets/images/apple.jpeg';
import orangeImg from '../assets/images/orange.jpeg';

const Marketplace = () => {
  const crops = [
    { id: 1, name: "Wheat", price: "$20 per kg", image: wheatImg  },
    { id: 2, name: "Rice", price: "$15 per kg", image: riceImg  },
    { id: 3, name: "Corn", price: "$18 per kg", image: cornImg  },
    { id: 4, name: "Tomato", price: "₹25 per kg", image: tomatoImg },
    { id: 5, name: "Mango", price: "₹50 per kg", image: mangoImg },
    { id: 6, name: "Apple", price: "₹60 per kg", image: appleImg },
    { id: 7, name: "Orange", price: "40 per kg", image: orangeImg}
  ];

 // Styles
  const containerStyle = {
    padding: '30px',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
    minHeight: '100vh'
  };

  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px'
  };

  const cardStyle = {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '10px',
    width: '220px',
    padding: '16px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
  };

  const imageStyle = {
    width: '100%',
    height: '140px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px'
  };

  const headingStyle = {
    margin: '10px 0 5px'
  };

  const priceStyle = {
    fontWeight: 'bold',
    color: '#333'
  };

  const buttonStyle = {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  };

  const backBtnStyle = {
    marginTop: '30px',
    padding: '10px 16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <h2>Crop Marketplace</h2>
      <div style={gridStyle}>
        {crops.map((crop) => (
          <div key={crop.id} style={cardStyle}>
            <img src={crop.image} alt={crop.name} style={imageStyle} />
            <h3 style={headingStyle}>{crop.name}</h3>
            <p style={priceStyle}>{crop.price}</p>
            <button style={buttonStyle}>Add to Cart</button>
          </div>
        ))}
      </div>
      <Link to="/">
        <button style={backBtnStyle}>Back to Home</button>
      </Link>
    </div>
  );
};

export default Marketplace;