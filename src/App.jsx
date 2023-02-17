// import all the components
import { Header, Profile, Footer } from './components'

const App = () => {
    return (
        <div className="bg-slate-50 scroll-smooth">
            <Header />
            <Profile />
            {/* <Footer /> */}
        </div>
    );
};

export default App;