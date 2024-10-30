import React from 'react';

const Rebanner = ({ image, title, description }) => {
  return (
    <div
      className="hero min-h-64"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          {description && <p className="mb-5">{description}</p>}
          {/* <button className="btn btn-primary">Explore Now</button> */}
        </div>
      </div>
    </div>
  );
};

export default Rebanner;
