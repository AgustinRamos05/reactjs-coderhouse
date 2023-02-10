import { BrowserRouter } from "react-router-dom";
import CustomProvider from "./CustomProvider";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <CustomProvider>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
