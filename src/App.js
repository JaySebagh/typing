import Theme from './components/theme.js'
import './components/sass/App.sass';
import Text from './components/text.js'

const App = () => {
    return (
        <div className = "App">
            <Theme />
            <Text />
        </div>
    );
}

export default App;
