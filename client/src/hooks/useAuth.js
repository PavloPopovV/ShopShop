import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constantes/routes";
import {
  useRegistrationMutation,
  useLoginMutation,
} from "../app/services/authApi";

export const useAuth = () => {
  const navigate = useNavigate();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [message, setMessage] = useState("");

  const [registerUser] = useRegistrationMutation();
  const [loginUser] = useLoginMutation();

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setMessage("");
  }

  const fetchAuth = async (data) => {
    try {
      if (isLoginMode) {
        await loginUser(data).unwrap();
        setMessage("Успішний вхід!");
      } else {
        await registerUser(data).unwrap();
        setMessage("Реєстрація успішна!");
      }
      navigate(ROUTES.HOME);
    } catch (err) {
        console.log(err)
      setMessage("Помилка: " + err.data.message);
    }
  };
  return { fetchAuth, message, toggleMode, isLoginMode };
};
