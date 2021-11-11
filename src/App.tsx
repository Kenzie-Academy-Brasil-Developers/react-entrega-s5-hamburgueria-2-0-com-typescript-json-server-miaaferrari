import GlobalStyled from "./styles/global";
// import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Header } from "./components/Header";
// import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";

function App() {
  return (
    <div>
      <GlobalStyled />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Cadastro />
    </div>
  );
}

export default App;
