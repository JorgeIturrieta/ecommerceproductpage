import { Header, MainContent, Footer } from './containers';
import { CartContextProvider } from './store/CartContext';

function App() {
    return (
        <CartContextProvider>
            <Header />
            <MainContent />
            <Footer />
        </CartContextProvider>
    );
}

export default App;
