import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Avia, Info, NotFound } from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/avia' replace/>}/>
          <Route path="/avia/*">
            <Route index element={<Avia />} />
            <Route path="info" element={<Info />} />
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;