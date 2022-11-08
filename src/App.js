import Theme from './components/Theme.js'
import './components/sass/App.sass';
import Text from './components/Text.js'

const App = () => {
    return (
        <div className = "App">
            <Theme />
            <Text />
        </div>
    );
}

export default App;
