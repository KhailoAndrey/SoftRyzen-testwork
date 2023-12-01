import './App.css';
import Main from 'Main/main';
import Header from 'Header/header';
import About from 'About/about';
import Electricity from 'Electricity/electricity';
import Cases from 'Cases/cases';
import Faq from 'FAQ/faq';
import Contacts from 'Contacts/contacts';
import Footer from 'Footer/footer';
import slides from './Cases/slides.json'

function App() {
  return (
    <>
      <div className="container">
      <Header />
      <Main />
      <About />
      <Electricity />
        <Cases slides={slides} />
      <Faq />
      <Contacts />
      <Footer/>
      </div>
    </>
  );
}

export default App;
