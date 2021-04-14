import React from 'react';
import '../Sass/Components/_header.scss';

class Header extends React.Component {
    render() {
        return (
            <header className="top">
                <h2>My Habits</h2>
                <button onClick={this.props.loadSampleHabits}>Load Sample habits</button>
            </header>

        )
    }
};

export default Header;
