import React from 'react';
import HabitCard from './HabitCard';
import AddHabitForm from './AddHabitForm';
import Header from './Header';
import WeeklyTracker from './WeeklyTracker';
import sampleHabits from '../sampleHabits';
import '../Sass/app.scss';


class App extends React.Component {

    state = {
        habits: {},
        habitStack: {},
        weeklyTrack: { dayCounter: [0,0,0,0,0,0,0]}
    }

    addToHabitStack = (key) => {
        //This is the key passed in from a button element press
        const keyPassedIn = key
        //This is a copy of the refrence of that key from the state where it exhists
        const theHabitIWantToAddToTheStack = {...this.state.habits[keyPassedIn]}
        // Making a copy of the second state i have
        const habitStack = {...this.state.habitStack};
        //setting the key to the matching habit i refrenced above
        habitStack[key] = theHabitIWantToAddToTheStack;
        //setting the value to true in the new state (for dynamic text)
        habitStack[key].added = true;
        //updating the second state with the new copy.
        this.setState({ habitStack })
        
    };

    updateCurrentDaysHabitCounter = () => {
        //Get the day
        const today = new Date(Date.now()).getDay();
        console.log(today);
        //Copy the state of weeklyTrack
        const weeklyTrackCopy = {...this.state.weeklyTrack.dayCounter}
        console.log(weeklyTrackCopy[0]);

    }

    completeHabitInHabitStack = (key) => {
        console.log(this.state.habitStack[key])
        //1. take a copy of the habitStack state
        const habitStack = {...this.state.habitStack};
        //2. remove this habits [key] from that copy
        this.updateCurrentDaysHabitCounter();
        //3. update the state of habit stack
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
                        details={this.state.habitStack[key]}
                        index={key}
                        added={this.state.habitStack[key].added}
                        completeHabitInHabitStack={this.completeHabitInHabitStack}
                        />)}
                </div>
                <div className="tracker-wrapper">
                    <WeeklyTracker
                    weeklyTrack={this.state.weeklyTrack}
                    />
                </div>
            </div>
        )
    }
}

export default App;