import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useRedirectToHome = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home", { replace: true });
    }
  }, []);
};
