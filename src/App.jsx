import { useState } from 'react';
import {
    Layout,
    Button,
    Typography
} from 'mdc-react';

import exercises from './exercises';
import Exercises from './components/Exercises';

import './App.css';

export default function App() {
    const [isCreating, setCreating] = useState(false);

    return (
        <div className="app">
            <Layout element="header" className="app-header" row justifyContent="between" alignItems="center">
                <Typography type="headline4" noMargin>English Practice</Typography>

                <Button>Создать</Button>
            </Layout>

            <Exercises
                exercises={exercises}
            />
        </div>
    );
}