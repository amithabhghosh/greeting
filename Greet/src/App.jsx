import { Routes, Route, Navigate } from "react-router-dom";
import WeddingGreeting from "./Wedding";
import { useEffect, useState } from "react";

function App() {


const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) {
    return (
      <div className="desktopBlock">
        <h1>Open on Mobile</h1>
        <p>This invitation is designed only for mobile devices.</p>
      </div>
    );
  }


  return (
    <Routes>
      {/* Redirect root URL */}
      <Route path="/" element={<Navigate to="/friend" replace />} />

      {/* Dynamic guest route */}
      <Route path="/:name" element={<WeddingGreeting />} />
    </Routes>
  );
}

export default App;