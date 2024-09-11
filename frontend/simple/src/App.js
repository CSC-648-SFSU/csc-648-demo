import './App.css';
import profile from "./profile.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
          <h1>Simple React App</h1>
          <p className="Context">
            Hello I am Shubh! I will be your TA for this course. I have worked on various projects and have experience in web development and high performance computing.
            Hope you have a great time in this course.
          </p>
      </header>
    </div>
  );
}

export default App;
