import React from 'react';
import '../Sass/Components/_habitCard.scss';
import Toothbrush from '../images/tempDeleteLater/toothbrush.png';

class HabitCard extends React.Component {
    render() {
        return (
            <div className="habit-wrapper">
                <div className="habit-name-desc-wrap">
                    <h3 className="habit-name">Brush Teeth</h3>
                    <p className="habit-desc">Habit description</p>
                </div>
                <button className="habit-done">Done</button>
            </div>
        )
    }
}

export default HabitCard;