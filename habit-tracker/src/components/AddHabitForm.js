import React from 'react';
import PropTypes from 'prop-types';
import '../Sass/Components/_addHabitForm.scss';

class AddHabitForm extends React.Component {

    // createHabit = (event) => {
    //     event.preventDefault();
    //     console.log(event);
    // }

    render() {
        return(
            <form className="habit-form-edit" >
                <input name="name" type="text" placeholder="Habit Name" />
                <select name="frequency" placeholder="Daily">
                    <option value="daily">Daily</option>
                    <option value="wekkly">Weekly</option>
                </select>
                <textarea name="desc" placeholder="desc" />
                <button type="submit">Add Habit</button>
            </form>
        )
    }
}

export default AddHabitForm;