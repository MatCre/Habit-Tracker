import React from 'react';
import styled, { ThemeProvider} from 'styled-components';
import HabitCard from './Habit';
import '../Sass/app.scss';

export const theme = {
    niceYellow: '#F1E100',
    font: "sans-serif",
    niceBlue: '#1919E6'
};

// const Card = styled.div`
//     max-width: 350px;
//     border: 5px solid ${props => props.theme.niceYellow};
//     border-radius: 5px;
//     overflow: hidden;
//     box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
//     margin: 30px auto;
//     button {
//         display: block;
//         width: 100%;
//     }
// `

// const HabitCardContainer = () => (
//     <Card>
//         <HabitCard />
//     </Card>
// );

// const ListTemplate = () => (
//     <ul className="myList">
//             <li className="listItem">1</li>
//             <li className="listItem">2</li>
//             <li className="listItem">3</li>
//         </ul>
// )

const GlobalStyles = styled.div`
    font-family: ${props => props.theme.font};
    color: ${props => props.theme.niceBlue};
`

class App extends React.Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <GlobalStyles>
                    <HabitCard/>
                    {/* <ListTemplate /> */}
                </GlobalStyles>
            </ThemeProvider>
        )
    }
}

export default App;