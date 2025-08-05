import { useState } from "react";

import "./App.css";

function App() {
  const [rotate, setRotate] = useState(false);
  const titleClass = rotate ? "title rotate" : "title";

  return (
    <div className={titleClass} onClick={() => setRotate(!rotate)}>
      ART X BREATH
    </div>
  );
}

export default App;
