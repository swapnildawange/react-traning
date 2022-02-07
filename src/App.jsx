import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Login from "./components/Login";
import Projects from "./components/Projects";

const queryClient = new QueryClient();
function App() {
  const [showLoginPage, setShowLoginPage] = useState(true);
  const title = showLoginPage ? "Projects" : "Login";

  const onLoginSuccess = (token) => {
    setShowLoginPage(false);
    localStorage.setItem("user", JSON.stringify({ token, isLoggedIn: true }));
  };

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user?.isLoggedIn) {
      setShowLoginPage(false);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div
        style={{
          textAlign: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        {showLoginPage ? (
          <div>
            <Login {...{ onLoginSuccess }} />
          </div>
        ) : (
          <>
            <Projects />
          </>
        )}
      </div>
    </QueryClientProvider>
  );
}

export default App;


