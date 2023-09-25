import exercises from './exercises';
import Exercises from './components/Exercises';

import './App.css';

export default function App() {
    return (
        <div className="app">
            <Exercises
                exercises={exercises}
            />
        </div>
    );
}