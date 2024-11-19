import React from 'react';

const Home = () => {
  return (
    <div className="h-screen bg-blue-100 flex items-center justify-between px-8">
      
      <div className="text-left w-1/2">
        <h1 className="text-3xl font-bold mb-4">
          Investing in Knowledge and Your Future
        </h1>
        <p className="text-lg">
          Knowledge is the key to success. Empower yourself with the resources you need to grow academically and professionally.
        </p>
      </div>
      <div className="flex justify-center w-1/2">
        <img 
          src="src/assets/pic.jpg" 
          alt="Profile" 
          className="rounded-full object-cover border-2 border-gray-100 h-60 w-60 shadow-md"
        />
      </div>
    </div>
  );
}

export default Home;
