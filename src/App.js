import { AllRoutes } from './routes/AllRoutes';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-crna-100 justify-between">
          <Header />
          <AllRoutes />
          <Footer /> 
     </div>
  );
}

export default App;
