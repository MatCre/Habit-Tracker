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
    // console.log()
    // if(this.state.habitStack.hasOwnProperty(key)) {
    //     return
    // }

    //0.5 update the text of the button to say 'done'
    addToHabitStack = (key) => {
        const keyPassedIn = key
        const theHabitIWantToAddToTheStack = {...this.state.habits[keyPassedIn]}
        console.log(theHabitIWantToAddToTheStack);
        //1. take a copy of the state
        const habitStack = {...this.state.habitStack};
        habitStack[key] = theHabitIWantToAddToTheStack;
        habitStack[key].added = true;
        
    
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
                        details={this.state.habitStack[key]}
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