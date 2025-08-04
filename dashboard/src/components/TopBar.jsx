import Menu from "./Menu";
import { useAuth } from "./AuthContext";

const TopBar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <div className="user-section">
        <span className="username">Welcome, {user}</span>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;