import React from 'react';
import '../App.css'; // ლოდინგის სტილის ფაილი

const Loading = () => {
  return (
    <div className="loading">
      <h2>Welcome to Luka's Portfolio!</h2>
      <div className="spinner"></div> {/* სპინერის ანიმაცია */}
    </div>
  );
};

export default Loading;
