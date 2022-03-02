
import "./App.css";
import stars from './img/stars.png'
import astronaut from './img/rocketman.png'
function App() {
    return (
        <div className = "App" > 
            <img src={stars} alt='start' className='stars' />
                <div className='center'>
                    <h2 className='welcomeRocketer'>welcome rocketer</h2>
                    <a className='startButton'><p>Start Questionnaire</p></a>
                    <p className='submitted'>Submitted Applications</p>
                    <img src={astronaut} alt="astronaut" className='astronaut' />
                </div>
        </div>

    );
}

export default App;