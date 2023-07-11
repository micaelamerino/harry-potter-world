import { useNavigate } from "react-router-dom";

const Button = () => {
    const navigate = useNavigate();
  return (
    <button 
    onClick={()=>navigate(-1)}
    className="bg-red-700 rounded-full px-2 hover:bg-red-500">Volver</button>
  )
}

export default Button