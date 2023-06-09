import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Alert from "../components/Alert";
import axiosClient from "../config/axiosClient";
import Spinner from "../components/Spinner";

const ConfirmAccount = () => {
  const [alert, setAlert] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    confirmAccount();
  }, []);

  const confirmAccount = async () => {
    try {
      const { data } = await axiosClient(`/auth/confirm/${id}`);
      setAlert({ msg: "Cuenta verificada correctamente", type: "success" });
      setLoading(true);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      setAlert({ msg: error.response.data.msg, type: "error" });
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-amber-500 font-black text-6xl capitalize">
        Confirmación de tu cuenta
      </h1>
      <div>{alert.msg && <Alert alert={alert} />}</div>
      {loading && <Spinner text="Redirigiendo para iniciar sesión" />}
    </>
  );
};

export default ConfirmAccount;
