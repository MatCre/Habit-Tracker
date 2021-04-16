import React from 'react';
import '../Sass/Components/_weeklyTracker.scss';

class WeeklyTracker extends React.Component {


    render() {

        const weeklyTrack = {...this.props.weeklyTrack}

        return (
            <div className="tracker-wrap">
                <h2>Weekly Progress</h2>
                <div className="week-prog-wrap">
                        <div className="sunday">Sun</div>
                        <div className="monday">Mon</div>
                        <div className="tuesday">Tue</div>
                        <div className="wednesday">Wed</div>
                        <div className="thursday">Thur</div>
                        <div className="friday">Fri</div>
                        <div className="saturday">Sat</div>
                        <div id="day1" className="day-track"><span>{(weeklyTrack[0])}</span></div>
                        <div id="day2" className="day-track"><span>{(weeklyTrack[1])}</span></div>
                        <div id="day3" className="day-track"><span>{(weeklyTrack[2])}</span></div>
                        <div id="day4" className="day-track"><span>{(weeklyTrack[3])}</span></div>
                        <div id="day5" className="day-track"><span>{(weeklyTrack[4])}</span></div>
                        <div id="day6" className="day-track"><span>{(weeklyTrack[5])}</span></div>
                        <div id="day7" className="day-track"><span>{(weeklyTrack[6])}</span></div>
                </div>
            </div>
        )

    }
}

export default WeeklyTracker;