import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Access from "./Pages/Access";
import Hero from "./Pages/Hero";
import Reviews from "./Pages/Reviews";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reviews />
        <Access />
      </main>
      <Footer />
    </>
  );
}
