// Import the main view component we created
import PracticeView from './components/PracticeView';
// Import the CSS file for global styles
import './index.css';

function App() {
  return (
    <div className="app-container">
      {/* Main title with a professional look */}
      <h1>Flashcard Learner</h1>
      
      {/* Render the PracticeView component */}
      <PracticeView />
    </div>
  );
}

export default App;