import { useAuthStore } from "./stores.js";
import { Auth } from "./features/Auth.jsx";
import { WorkspaceDashboard } from "./features/WorkspaceDashboard.jsx";

function App() {
  const token = useAuthStore((state) => state.token);

  if (!token) {
    return <Auth />;
  }

  return <WorkspaceDashboard />;
}

export default App;
