import React from 'react';
import HabitCard from './HabitCard';
import AddHabitForm from './AddHabitForm';
import Header from './Header';
import HabitStack from './HabitStack';
import Tracker from './Tracker';
import '../Sass/app.scss';


const state = {
    habits: {},
}

{/* <HabitCard/> */}

class App extends React.Component {

    render() {
        return (
            <div className="habit-tracker">
                <div className="habits">
                    <Header />
                    <ul className="habit-list">
                        <HabitCard />
                    </ul>
                    <AddHabitForm />
                </div>
                <HabitStack />
                <Tracker />
            </div>
        )
    }
}

export default App;