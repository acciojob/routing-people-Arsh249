import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Use `Routes` instead of `Switch`
import UserList from "./UserList";
import UserDetail from "./UserDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Use element prop and pass components as JSX */}
        <Route path="/" element={<UserList />} />
        <Route path="/users/:userId" element={<UserDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
