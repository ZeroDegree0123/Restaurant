import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import LoginForm from "../../Components/LoginForm/LoginForm";

export default function AuthPage({ setUser, scrollToTop }) {
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate()

  scrollToTop();

  function handleRedirect() {
    let path = `/`;
    navigate(path)
  }
  return (
    <main className="auth-container">
      <h1>AuthPage</h1>
      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Sign Up" : "Log In"}
      </button>
      {showLogin ? (
        <LoginForm setUser={setUser} handleRedirect={handleRedirect}/>
      ) : (
        <SignUpForm setUser={setUser} handleRedirect={handleRedirect}/>
      )}
    </main>
  );
}
