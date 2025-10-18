import "./App.css";
import { Statistics } from "./components/statistic/statistic";
import { FriendList } from "./components/friends/friendsList";
import stat from "./data/statistics.json";
import friends from "./data/friends.json";

function App() {
  return (
    <div className="App">
      <Statistics stats={stat} title="Upload stats" />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
