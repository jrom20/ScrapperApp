import './App.css';
import "react-toastify/dist/ReactToastify.css";
import CommitPage from './CommitPage';
import Header from './common/Header';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="container">
      <ToastContainer autoClose={3000} hideProgressBar={true}></ToastContainer>
      <Header></Header>
      <CommitPage></CommitPage>
    </div>
  );
}

export default App;
