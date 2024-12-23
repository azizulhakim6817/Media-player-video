import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MediaPlayerPage from "./pages/MediaPlayerPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MediaPlayerPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
