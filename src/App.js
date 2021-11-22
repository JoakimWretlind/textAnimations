import { Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './globalStyle';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/One/One';
import Two from './pages/Two/Two';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/two" element={<Two />} />
      </Routes>
    </>
  );
}

export default App;
