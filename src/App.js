import "./styles/reset.css";
import "./styles/main.css";
import Header from './components/assets/header/header.jsx';
import Footer from './components/assets/footer/footer.jsx';
import Main from './pages/main/main.jsx';
import About from './pages/about/about.jsx';


function App() {
  return (
    <div className="App">
        <Header />
        {/*<Main />*/}
        <About />
        <Footer />
    </div>
  );
}

export default App;
