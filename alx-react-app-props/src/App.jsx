import WelcomeMessage from './components/WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';  
import Footer from './Footer';
import UserProfile from './components/UserProfile';
import UserContext from './UserContext';
// import ProfilePage from './ProfilePage'; // Not needed unless required

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      
      {/* Wrap UserProfile in Context.Provider */}
      <UserContext.Provider value={userData}>
        <UserProfile />
      </UserContext.Provider>

      <Footer />
    </>
  );
}

export default App;
