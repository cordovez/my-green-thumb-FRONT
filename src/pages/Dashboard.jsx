import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PlantForm from "../components/PlantForm";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.firstName}</h1>
        <p>Plants Dashboard</p>
      </section>
      <PlantForm />
    </>
  );
};

export default Dashboard;
