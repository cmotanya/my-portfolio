import About from "./about";
import Footer from "./footer";
import Header from "./header";
import Intro from "./intro";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Intro />
        <About />
      </main>
      <Footer />
    </>
  );
}
