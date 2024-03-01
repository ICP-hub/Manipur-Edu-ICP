import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth, AuthProvider } from "./utils/useAuthClient";
import UserBasedRoute from "./UserBasedRoute";
import routes from "./routes";

function App() {
  const { reloadLogin } = useAuth();

  useEffect(() => {
    reloadLogin();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <UserBasedRoute
                  component={route.component}
                  allowedUser={route.allowedUser}
                />
              }
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
