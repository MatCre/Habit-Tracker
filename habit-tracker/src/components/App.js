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
        habitStack: {}
    }

    addToHabitStack = (key) => {
        //1. take a copy of the state
        const habitStack = {...this.state.habitStack};
        //2 Use the key to reference the habits in state and set that to the habitStack same key
        habitStack[key] = this.state.habits[key];
        //3 call setstate to update the habitStack  state object
        this.setState({ habitStack })
        
    };

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
                        addToHabitStack={this.addToHabitStack}
                        index={key}
                        />)}
                    </ul>
                    <AddHabitForm />
                </div>
                <div className="stack-wrap"> 
                    {Object.keys(this.state.habitStack).map(key =>
                        <HabitCard
                        key={key} 
                        details={this.state.habits[key]}
                        index={key}
                        />)}
                </div>
                <Tracker />
            </div>
        )
    }
}

export default App;