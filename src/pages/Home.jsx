import { useNavigate } from "react-router-dom";
import "@/App.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="home-container"
      style={{ textAlign: "center", padding: "4rem" }}
    >
      <h1 style={{ marginBottom: "2rem", color: "#213547" }}>
        Choose Your Configurator
      </h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
        <button
          style={{
            padding: "1rem 2rem",
            fontSize: "1.2rem",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#5DADE2",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => navigate("/chair")}
        >
          Chair Configurator
        </button>

        <button
          style={{
            padding: "1rem 2rem",
            fontSize: "1.2rem",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#58D68D",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => navigate("/door")}
        >
          Door Configurator
        </button>
      </div>
    </div>
  );
}
