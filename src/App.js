import './App.css';
import Header from "./components/Header/index";
import Navigation from './components/Navigation';
import Content from './components/Content';
import MainContent from './components/MainContent';
import Footer from "./components/Footer/index";
function App() {  
  return (
    <>
      <Header />
      <Navigation />
      <div className = "main">
        <Content text = "content1" />
        <MainContent />
        <Content text = "content2" />
      </div>
      <Footer />
    </>
  )
}
export default App;
