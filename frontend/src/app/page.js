import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ServerInformation from "./components/ServerInformations/ServerInformation";
import Classes from "./components/Classes/Classes";

export default function Home() {
  return (
    <main className="bg-dark text-white overflow-hidden min-h-screen flex flex-col justify-between">
      <header
        id="inicio"
        className="min-h-[900px] flex flex-col bg-[url('/img/galinhavruuum.jpg')] bg-fixed bg-center bg-cover"
      >
        <Navbar />
        <Banner />
      </header>
      <ServerInformation />
      <Classes />
      <Footer />
    </main>
  );
}
