import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SelectionAndConvert } from './pages/SelectionAndConvert.jsx';
import { FileToConvert }       from './pages/FileToConvert.jsx';
import { SuccesConvert }      from './pages/SuccesConvert.jsx';
import { FailedConvert }      from './pages/FailedConvert.jsx';

export default function App() {
  return (
    <BrowserRouter
        basename={"/"}
        forceRefresh={false}
        getUserConfirmation={undefined}
        keyLength={5}>
      <Routes>
        <Route path="/" element={<FileToConvert/>} />
        <Route path="/FileToConvert" element={<SelectionAndConvert/>} />
        <Route path="/SuccesConvert" element={<SuccesConvert/>} />
        <Route path="/FailedConvert" element={<FailedConvert/>} />
      </Routes>
    </BrowserRouter>
  );
}

