import { Routes, Route } from 'react-router-dom'
import Layout from './componenets/Layout'
import Public from './componenets/Public'
import Login from './componenets/Login'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        
      </Route>
    </Routes>
  );
}

export default App;
