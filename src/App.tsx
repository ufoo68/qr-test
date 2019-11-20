import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import './App.scss';

const liff = window.liff

const App: FC = () => {
  const openQR = () => {
    liff.init({ liffId: process.env.REACT_APP_LIFF_ID as string }).then(() => {
      liff.scanCode()
        .then(value => alert(value.toString()))
    })
  }
  return (
    <div className="App">
      <Button variant="contained" color="primary" onClick={() => openQR()}>Open QR camera</Button>
    </div>
  );
}

export default App;
