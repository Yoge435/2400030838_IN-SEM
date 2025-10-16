import React from 'react';

const UserCard = ({ name, age, bio }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '300px',
    margin: '20px auto',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    fontFamily: 'sans-serif',
  };

  const nameStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#2c3e50',
  };

  const ageStyle = {
    fontSize: '1rem',
    color: '#7f8c8d',
    marginBottom: '12px',
  };

  const bioStyle = {
    fontSize: '1rem',
    color: '#34495e',
    lineHeight: '1.5',
  };

  return (
    <div style={cardStyle}>
      <div style={nameStyle}>{name}</div>
      <div style={ageStyle}>Age: {age}</div>
      <div style={bioStyle}>{bio}</div>
    </div>
  );
};

export default UserCard;