import React from 'react';
import HabitCard from './HabitCard';
import AddHabitForm from './AddHabitForm';
import Header from './Header';
import HabitStack from './HabitStack';
import Tracker from './Tracker';
import sampleHabits from '../sampleHabits';
import '../Sass/app.scss';


class App extends React.Component {

    state = {
        habits: {},
    }

    loadSampleHabits = () => {
        console.log('loading sample habits')
        this.setState({habits: sampleHabits})
    };

    render() {
        return (
            <div className="habit-tracker">
                <div className="habits">
                    <Header loadSampleHabits={this.loadSampleHabits}/>
                    <ul className="habit-list">
                      {Object.keys(this.state.habits).map(key =>
                        <HabitCard
                        key={key} 
                        details={this.state.habits[key]}
                        />)}
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