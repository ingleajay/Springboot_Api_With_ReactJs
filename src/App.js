
import LoadBook from './component/LoadBook';
import Navbar from './component/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AddBook from './component/AddBook';
import UpdateBook from './component/UpdateBook';
import { useState } from 'react';


function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (message , type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  return (
      <>
      <BrowserRouter>
      <Navbar title="Book library"/>
      <Routes>
      <Route exact path="/" element={<LoadBook />} />
      <Route exact path="addbook" element={<AddBook showAlert={showAlert} alert={alert} />} />
      <Route exact path="updatebook" element={<UpdateBook showAlert={showAlert} alert={alert}/>} />
    </Routes>
    
       </BrowserRouter>
      </>
  );
}

export default App;
