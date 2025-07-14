import { BrowserRouter, Routes, Route } from "react-router-dom"
import PetList from "./Pages/PetList"
import PetPost from "./Pages/PetPost"
import PetCard from "./Components/PetCard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<PetList />} />
        <Route path ="/post/:id" element={<PetPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
