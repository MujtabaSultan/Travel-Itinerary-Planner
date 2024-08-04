// src/App.jsx
import './App.css';

const App = () => {
  const places = [
    { name: 'greece', visited: true },
    { name: 'qatar', visited: false },
    { name: 'kuwait', visited: true },
  ];

  return (
    <>
      <h1>plans List</h1>
      <ul>
        {places.map((place, index) => (
          <li key={index} className={place.visited ? 'completed' : 'not-completed'}>
            {place.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;