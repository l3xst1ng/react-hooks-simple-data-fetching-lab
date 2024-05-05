// create your App component here

import React, { useEffect, useState } from "react";

function App() {
  const [image, setImage] = useState({ message: "", status: "" });

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setImage(data));
  }, []);

  if (image.status !== "success") return <d>Loading...</d>;

  return <img src={image.message} alt="A Random Dog" />;
}
export default App;
