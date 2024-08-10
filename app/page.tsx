import About from "./about";
import Footer from "./footer";
import Header from "./header";
import Intro from "./intro";
import Projects from "./projects";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Intro />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
