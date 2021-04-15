import React from 'react';
import '../Sass/Components/_weeklyTracker.scss';

class WeeklyTracker extends React.Component {
    render() {
        return (
            <div className="tracker-wrap">
                <h2>Weekly Progress</h2>
                <div className="week-prog-wrap">
                        <div className="monday">Mon</div>
                        <div className="tuesday">Tue</div>
                        <div className="wednesday">Wed</div>
                        <div className="thursday">Thur</div>
                        <div className="friday">Fri</div>
                        <div className="saturday">Sat</div>
                        <div className="sunday">Sun</div>
                        <div id="day1" className="day-track-mon"></div>
                        <div id="day2" className="day-track-tue"></div>
                        <div id="day3" className="day-track-wed"></div>
                        <div id="day4" className="day-track-thur"></div>
                        <div id="day5" className="day-track-fri"></div>
                        <div id="day6" className="day-track-sat"></div>
                        <div id="day7" className="day-track-sun"></div>
                </div>
            </div>
        )

    }
}

export default WeeklyTracker;