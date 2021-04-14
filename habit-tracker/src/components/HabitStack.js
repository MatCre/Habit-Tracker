import React from 'react';
import '../Sass/Components/_habitStack.scss';

class HabitStack extends React.Component {
    render() {
        return (
            <div className="stack-wrap">
                <h2>Habit Stack</h2>
                <ul className="habits">
                    <li>Habit Stack</li>
                </ul>
            </div>
        );
    };
};

export default HabitStack;