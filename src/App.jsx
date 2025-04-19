import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-black to-black text-white">
      <div className="bg-white text-black rounded-2xl shadow-2xl p-10 max-w-xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-4">Welcome to Square Education</h1>
        <p className="text-lg font-medium mb-2">Transforming learning through technology and innovation.</p>
        
        <div className="text-md font-semibold text-purple-600 mb-6 tracking-wide">
          <span>Earn</span> • <span>Churn</span> • <span>Learn</span>
        </div>

        <p className="text-gray-600 mb-6">
          🚧 Our platform is under construction. We're working hard to bring you an incredible educational experience.
        </p>
        <p className="text-sm text-gray-500">Stay tuned. Launching soon!</p>
        
        <div className="mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} Square Education. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default App;
