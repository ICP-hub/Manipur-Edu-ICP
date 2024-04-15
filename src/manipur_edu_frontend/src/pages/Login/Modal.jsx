import React from 'react';

// Inline styles for the modal overlay
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

// Inline styles for the modal content
const contentStyle = {
  padding: 20,
  backgroundColor: '#fff',
  borderRadius: 5,
  maxWidth: '500px',
  minHeight: '200px',
  margin: '0 20px',
  zIndex: 1001,
  position: 'relative',
};

// Modal component
const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;

  async function btnvalue(children) {
    console.log(children.value)
  }

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={contentStyle} onClick={e => e.stopPropagation()}>
        {children}
        {/* <button onClick={onClose} style={{ position: 'absolute', top: 10, right: 10 }}> */}
        <button onClick={btnvalue(children)} style={{ position: 'absolute', top: 10, right: 10 }}>

          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
