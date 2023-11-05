import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const handleShowToast = () => {
    toast.success('Ini adalah pesan toast success.', {
      position: 'top-right',
      autoClose: 3000,
    });

    toast.info('Ini adalah pesan toast info.', {
      position: 'top-right',
      autoClose: 3000,
    });

    toast.warning('Ini adalah pesan toast warning.', {
      position: 'top-right',
      autoClose: 3000,
    });

    toast.error('Ini adalah pesan toast error (danger).', {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fitur Toast</h1>
        <button className="show-toast-button" onClick={handleShowToast}>
          Tampilkan Toast
        </button>
        <ToastContainer />
      </header>
    </div>
  );
}

export default App;