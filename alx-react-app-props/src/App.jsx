import WelcomeMessage from './components/WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';  
import Footer from './Footer';
import UserProfile from './components/UserProfile';
import UserContext from './UserContext';
import ProfilePage from './ProfilePage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
    <>
    <WelcomeMessage />
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography." />
      <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App;
