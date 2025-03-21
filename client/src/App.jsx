import { Outlet } from "react-router-dom";
import "./App.css";
import { useUser } from "@clerk/clerk-react";


function App() {
  const {user, isLoaded, isSignedIn} = useUser();

  if (!user) {
      
  }

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
