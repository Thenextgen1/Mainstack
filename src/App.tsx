import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardNav } from './components';
import { Home } from './pages';
import './styles/App.css'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='app'>
        <Router>
          <DashboardNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/item1" element={<Home />} />
            <Route path="/item2" element={<Home />} />
            <Route path="/item3" element={<Home />} />
            <Route path="/item4" element={<Home />} />
            <Route path="/item5" element={<Home />} />
            <Route path="/item6" element={<Home />} />
            <Route path="/item7" element={<Home />} />
            <Route path="/item8" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
