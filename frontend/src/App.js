import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Chats from "./Components/Chats";
import ChatScreen from "./Components/ChatScreen";
import LandingPage from "./Components/LandingPage/LandingPage";
import SwipePage from "./Components/SwipePage";
import ProfileCard from "./Components/ProfileCard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/chats/:name"
            element={
              <>
                <NavigationBar backButton="/chats" />
                <ChatScreen />
              </>
            }
          />
          <Route
            path="/chats"
            element={
              <>
                <NavigationBar backButton="/" />
                <Chats />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <NavigationBar forwardButton="/" />
                <h1>Put ProfilePage Component here</h1>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <NavigationBar />
                <h1>Put HomePage Component here</h1>
              </>
            }
          />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/swipe" element={<ProfileCard />} />
          <Route path="/filter" element={<SwipePage />} />
        </Routes>
      </Router>
      {/* NavigationBar*/}
      {/* User Cards with React Tinder Card*/}
      {/* Chat Screen */}
      {/* Individual Chat Screen */}
    </div>
  );
}

export default App;
