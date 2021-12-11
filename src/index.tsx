import ReactDOM from 'react-dom';
import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponents';

const App = () => {
    return (
        <div>
            <EventComponent/>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
