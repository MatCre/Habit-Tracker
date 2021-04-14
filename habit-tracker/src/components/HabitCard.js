import React from 'react';
import '../Sass/Components/_habitCard.scss';

class HabitCard extends React.Component {
    render() {

        const {habitName, habitDesc, habitLength, complete} = this.props.details;

        return (
            <div className="habit-wrapper">
                <h3 className="habit-name">{habitName}</h3>
                <p className="habit-desc">{habitDesc}</p>
                <div className="habit-done">
                    <button className="habit-done-btn">Done</button>
                </div>
            </div>
        )
    }
}

export default HabitCard;