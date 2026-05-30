import { Routes, Route } from "react-router-dom";
import WeddingGreeting from "./Wedding";

function App() {
  return (
    <Routes>
      <Route path="/:name" element={<WeddingGreeting />} />
    </Routes>
  );
}

export default App;
