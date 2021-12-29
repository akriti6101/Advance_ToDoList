import './index.css';
import Logo from './Logo';
import Listbar from './Listbar';
const App=()=>{
    return (<>
        <div className="div1">
          <Logo/>
          <p className='para'>Add your list here ✌️</p>
          <Listbar/>
        </div>
          </>
    );
}
export default App;