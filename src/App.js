import './styles.css';
import Fullname from './Components/Profile/FullName';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import Adress from './Components/Profile/Adress'

function App() {
  return (
    <div className="myDiv">
      <ProfilePhoto />
      <div id="myId">
        <Fullname />
      </div>
      <Adress />
    </div>
  );
}

export default App;
