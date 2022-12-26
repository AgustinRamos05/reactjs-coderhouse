
import Footer from './Footer';
import Header from './Header';
import ItemListContainer from './ItemListContainer';
import Main from './Main';

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <ItemListContainer greeting = "React js"/>
      <Footer/>
    </>
  );
}

export default App;
