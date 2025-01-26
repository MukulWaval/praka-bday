import React from "react";

const Cohum: React.FC = () => {
  return (
    <div className="card bg-base-100 p-4 sm:p-1 md:p-2">
      <div className="card-body">
        <h1 className="card-title text-2xl sm:text-3xl mb-4">Co-Hum</h1>
        <p className="lg:text-xl">
          Co-Hum is a learning space for curious learners, a space for
          connections, a space to discover your passions and dreams, a space
          where learning unfolds naturally.
        </p>
        <img
          className="h-auto max-w-full lg:max-w-lg rounded-lg"
          src="https://i.postimg.cc/g2Vpgdw7/IMG-20241026-WA0007.jpg"
          alt="image description"
        />
      </div>
    </div>
  );
};

export default Cohum;
