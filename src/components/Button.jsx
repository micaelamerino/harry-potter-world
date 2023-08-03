import { useNavigate } from "react-router-dom";

const Button = () => {
    const navigate = useNavigate();
  return (
    <button 
    onClick={()=>navigate(-1)}
    className="bg-red-700 rounded-full px-3 py-1 hover:bg-red-600 duration-200">Volver</button>
  )
}

export default Button