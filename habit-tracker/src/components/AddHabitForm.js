import React from 'react';
import PropTypes from 'prop-types';
import '../Sass/Components/_addHabitForm.scss';

class AddHabitForm extends React.Component {
    nameRef = React.createRef();
    descRef = React.createRef();
    addedRef = React.createRef();

    createHabit = (event) => {
        event.preventDefault();
        console.log(event);
        const habit = {
            habitName: this.nameRef.current.value,
            habitDesc: this.descRef.current.value,
            added: false
        }
        this.props.addHabit(habit)
        //refresh the form
        event.currentTarget.reset();
    }

    render() {
        return(
            <form className="habit-form-edit" onSubmit={this.createHabit} >
                <input name="name" ref={this.nameRef} type="text" placeholder="Habit Name"  autoComplete='off'/>
                <textarea name="desc" ref={this.descRef} placeholder="desc" />
                <button type="submit">Add Habit</button>
            </form>
        )
    }
}

export default AddHabitForm;