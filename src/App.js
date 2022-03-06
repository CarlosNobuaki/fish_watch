import axios from "axios";
import React from "react";

const baseURL = "https://www.fishwatch.gov/api/species";

function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
           
    </div>
  );
}


export default App;
