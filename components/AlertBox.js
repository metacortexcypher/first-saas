import React, { useState, useEffect } from 'react';

const AlertBox = () => {
  const [showAlertBox, setShowAlertBox] = useState(false);

  const closeAlertBox = () => {
    setShowAlertBox(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlertBox(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    showAlertBox && (
      <div className="alert-box">
        <button className="close-btn" onClick={closeAlertBox}>
          ✖
        </button>
        Thank you awesome human for checking out this shitty page! ❤️<br /> I just learned how to install npm and set up analytics for this page! 🚀<br /> I'm watching you... 👀
      </div>
    )
  );
};

export default AlertBox;