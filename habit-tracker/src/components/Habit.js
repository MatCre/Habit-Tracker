import React from 'react';
import '../Sass/Components/_habitCard.scss';
import Toothbrush from '../images/tempDeleteLater/toothbrush.png';

class HabitCard extends React.Component {
    render() {
        return (
            <div className="habit-wrapper">
                <h3 className="habit-name">Brush Teeth</h3>
                <img className="habit-image"src={Toothbrush} alt="a toothbrush"/>
                <button className="habit-done">Done</button>
            </div>
        )
    }
}

export default HabitCard;