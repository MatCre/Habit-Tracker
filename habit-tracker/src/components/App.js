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
        weeklyTrack: [0,0,0,0,0,0,0]
    }

    componentDidMount() {
        const localStorageRef1 = localStorage.getItem('habitStack');
        const localStorageRef2 = localStorage.getItem('weeklyTrack');
        if(localStorageRef1) {
            this.setState({habitStack: JSON.parse(localStorageRef1)});
        }
        if(localStorageRef2) {
            this.setState({weeklyTrack: JSON.parse(localStorageRef2)});
        }
    }

    componentDidUpdate() { 

        localStorage.setItem('habitStack', JSON.stringify(this.state.habitStack));
        localStorage.setItem('weeklyTrack', JSON.stringify(this.state.weeklyTrack));
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
        //Copy the state of weeklyTrack
        const weeklyTrack = {...this.state.weeklyTrack}
        //Get the value of the array value i want to incremenet
        let valueToIncrement = weeklyTrack[today];
        //Increment that value
        valueToIncrement ++
        //Set todays value to that incremented value 
        weeklyTrack[today] = valueToIncrement;
        //Set the state of weekly track to the new values.
        this.setState({ weeklyTrack })



    }

    completeHabitInHabitStack = (key) => {
        //1. take a copy of the habitStack state
        const habitStack = {...this.state.habitStack};
        //increment today habit counter
        this.updateCurrentDaysHabitCounter();
        //2. remove this habits [key] from that copy
        delete habitStack[key]
        //3. update the state of habit stack
        this.setState({habitStack});
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