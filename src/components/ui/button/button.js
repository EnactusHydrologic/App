import React from 'react';

const Button = ({ className, variant, children }) => {
  return (
    <button className={`btn ${variant} ${className}`}>
      {children}
    </button>
  );
};

export { Button };