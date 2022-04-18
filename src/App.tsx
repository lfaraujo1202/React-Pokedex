import { GlobalStyle } from './Styles/global';
import { Header } from "./components/Header";
import { Dashboard } from './components/Dashboard';
import { Dashboardv2 } from './components/Dashboardv2';

export function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      {/* <Dashboardv2 /> */}
      <GlobalStyle />
    </div>
  );
}