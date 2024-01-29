import "./styles/reset.css";
import "./styles/main.css";
import Header from './components/assets/header/header.jsx';
import Main from './pages/main/main.jsx';
import Footer from './components/assets/footer/footer.jsx';

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
