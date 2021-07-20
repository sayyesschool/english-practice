import { useState } from 'react';
import {
    Layout,
    SegmentedButton,
    Typography
} from 'mdc-react';

import exercises from './exercises';
import Exercises from './components/Exercises';
import ExerciseForms from './components/ExerciseForms';

import './App.css';

export default function App() {
    const [isEditing, setEditing] = useState(false);

    return (
        <div className="app">
            <Layout element="header" className="app-header" row justifyContent="between" alignItems="center">
                <Typography type="headline4" noMargin>English Practice</Typography>

                <SegmentedButton>
                    <SegmentedButton.Segment
                        label="Просмотр"
                        selected={!isEditing}
                        onClick={() => setEditing(v => !v)}
                    />

                    <SegmentedButton.Segment
                        label="Редактирование"
                        selected={isEditing}
                        onClick={() => setEditing(v => !v)}
                    />
                </SegmentedButton>
            </Layout>

            {isEditing ?
                <ExerciseForms
                    exercises={exercises}
                />
                :
                <Exercises
                    exercises={exercises}
                />
            }
        </div>
    );
}