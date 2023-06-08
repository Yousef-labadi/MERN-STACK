
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
    <PersonCard firstName="Yousef"lastName="labadi" age={29}hairColor="black"  />
    <PersonCard firstName="Hamzeh"lastName="Farskh" age={27}hairColor="black"  />
    <PersonCard firstName="Khalid"lastName="Hasouneh" age={28}hairColor="black"  />
    <PersonCard firstName="Husam"lastName="Habayeb" age={28}hairColor="Yellow"  />
    <PersonCard firstName="Mohammad"lastName="Shadid" age={26}hairColor="brown"  />
    
    
    </div>
  );
}

export default App;
