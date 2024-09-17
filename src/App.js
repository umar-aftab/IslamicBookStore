import './App.css';
import Book from './components/Book';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const books = [
    {
      title: 'The Sickness and the Cure',
      author: 'Ibn Qayyim',
      year: 1345,
      summary: 'This book talks about curing your sicknesses within your heart',
      image: `${process.env.PUBLIC_URL}/img/SharhKitabAtTawheed_list.png`,
    },

    {
      title: 'Riyad As Salihaeen',
      author: 'Ibn Hajr', year: 1406,
      summary: 'This book talks about curing your sicknesses within your heart',
      image: `${process.env.PUBLIC_URL}/img/SharhKitabAtTawheed_list.png`,
    },

    {
      title: 'The Three Principles',
      author: 'Muhammad Ibn Abdul Wahhab',
      year: 1735,
      summary: 'This book talks about curing your sicknesses within your heart',
      image: `${process.env.PUBLIC_URL}/img/SharhKitabAtTawheed_list.png`,
    },

    {
      title: 'The Six Principles',
      author: 'Muhammad Ibn Abdul Wahhab',
      year: 1740,
      summary: 'This book talks about curing your sicknesses within your heart',
      image: `${process.env.PUBLIC_URL}/img/SharhKitabAtTawheed_list.png`,
    },

    {
      title: 'Arbaoun Nawawiyyah',
      author: 'Imam An Nawawi',
      year: 1277,
      summary: 'This book talks about curing your sicknesses within your heart',
      image: `${process.env.PUBLIC_URL}/img/SharhKitabAtTawheed_list.png`,
    }
  ];

  return (
    <div className="App">
      <Header />
      <Book books={books} />
      <Footer />
    </div>
  );
}

export default App;
