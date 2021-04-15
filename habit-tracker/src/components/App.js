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
        habitStack: {}
    }

    addToHabitStack = (key) => {
        console.log()
        if(this.state.habitStack.hasOwnProperty(key)) {
            return
        }
        //0.5 update the text of the button to say 'done'
        //1. take a copy of the state
        const habitStack = {...this.state.habitStack};
        //2 Use the key to reference the habits in state and set that to the habitStack same key
        habitStack[key] = this.state.habits[key];
        //2.5 Set the added value to true
        habitStack[key].added = true;
        //3 call setstate to update the habitStack  state object
        this.setState({ habitStack })
        
    };

    completeHabitInHabitStack = (key) => {
        console.log(this.state.habitStack[key])
        //1. take a copy of the habitStack state
        //2. remove this habits [key] from that copy
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
                        details={this.state.habits[key]}
                        index={key}
                        added={this.state.habitStack[key].added}
                        completeHabitInHabitStack={this.completeHabitInHabitStack}
                        />)}
                </div>
                <div className="tracker-wrapper">
                    <WeeklyTracker />
                </div>
            </div>
        )
    }
}

export default App;