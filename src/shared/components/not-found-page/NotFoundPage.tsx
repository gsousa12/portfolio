import { useNavigate } from "react-router-dom";
import { useMobileDetect } from "../../hooks/useMobileDetect";

export const NotFoundPage = () => {
  const isMobile = useMobileDetect();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home", { replace: true });
  };

  return (
    <div
      className={`flex flex-col items-center justify-center ${
        isMobile ? "mt-45 mb-45" : "mt-50 mb-50"
      }`}
    >
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="mb-6 text-gray-600">Página não encontrada.</p>
      <button
        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-800 hover:cursor-pointer"
        onClick={handleBack}
      >
        Voltar
      </button>
    </div>
  );
};
