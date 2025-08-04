import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useAuth } from "./AuthContext";

const Home = () => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px',
        color: '#666'
      }}>
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect to login via AuthContext
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;