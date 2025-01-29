import Counter from '../counter/Counter'
import FetchApi from '../pages/FetchApi';
import SearchUser from '../pages/SearchUser';

function Home() {
  return (
    <div>
      <h1>Welcome To Home Page!!</h1>
      <Counter/>
      <FetchApi/>
      <SearchUser/>
    </div>
  );
}

export default Home;