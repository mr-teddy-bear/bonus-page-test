import { Routes, Route, BrowserRouter } from "react-router-dom";
import EventDetails from "./pages/EventDetails/EventDetails";
import ReferFriends from "./pages/ReferFriends/ReferFriends";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<EventDetails />} />
        <Route path={"/friends"} element={<ReferFriends />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
