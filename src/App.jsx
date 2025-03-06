import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './pages/User'
import PaymentReport from './pages/PaymentReport';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/payment-report" element={<PaymentReport />} />
      </Routes>
    </Router>
  )
}

export default App;