import React, { useEffect } from 'react';

const Confirmation = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000); // Message will be displayed for 2 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-20 right-4 text-green-500">
      {message}!
    </div>
  );
};

export default Confirmation;
