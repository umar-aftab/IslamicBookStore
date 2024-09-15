import './App.css';
import Book from './components/Book';

function App() {
  const books = [
    { title: 'The Sickness and the Cure', author: 'Ibn Qayyim', year: 1345, summary: 'This book talks about curing your sicknesses within your heart' },
    { title: 'Riyad As Salihaeen', author: 'Ibn Hajr', year: 1406, summary: 'This book talks about curing your sicknesses within your heart' },
    { title: 'The Three Principles', author: 'Muhammad Ibn Abdul Wahhab', year: 1735, summary: 'This book talks about curing your sicknesses within your heart' },
    { title: 'The Six Principles', author: 'Muhammad Ibn Abdul Wahhab', year: 1740, summary: 'This book talks about curing your sicknesses within your heart' },
    { title: 'Arbaoun Nawawiyyah', author: 'Imam An Nawawi', year: 1277, summary: 'This book talks about curing your sicknesses within your heart' }
  ];

  return (
    <div className="App">
      <Book books={books} />
    </div>
  );
}

export default App;
