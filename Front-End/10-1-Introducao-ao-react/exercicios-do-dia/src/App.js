import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['treinar','ler','estudar','trabalhar'];

function App() {
  return tasks.map((element) => {
     return <li>{Task(element)}</li>
  });
}

export default App;
