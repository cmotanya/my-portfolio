"use client";

import About from "./about";
import Footer from "./footer";
import Header from "./header";
import Intro from "./intro";
import Projects from "./projects";

import { useState, useEffect } from "react";

import "./globals.css";
import CachedContent from "./components/cached-content";
import LoaderUI from "./loaderUI";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentCached, setIsContentCached] = useState(false);
  const [isCachedContent, setCachedContent] = useState({});

  useEffect(() => {
    /* disable scrolling */
    document.body.style.overflow = "hidden";

    const cachedContent = localStorage.getItem("motanya-content");

    if (cachedContent) {
      setIsContentCached(true);
      setCachedContent(JSON.parse(cachedContent));
    } else {
      setIsContentCached(false);
    }

    /* simulate loading time if content is not cached */
    setTimeout(() => {
      setIsLoading(false);
      /* enable scrolling after data is fetched */
      document.body.style.overflow = "auto";
    }, 500); // Simulating a 2-second loading time
  }, []);

  return isLoading ? (
    <LoaderUI />
  ) : isContentCached ? (
    <CachedContent
      cachedContent={{
        html: "This is the content to cache",
        meta: {
          title: "Cornelius | Portfolio",
          description:
            "Welcome to my portfolio website! I'm a passionate web developer with expertise in React, Next.js, and other modern web technologies. Browse my projects and learn more about my skills and experience.",
        },
      }}
    />
  ) : (
    <>
      <Header />
      <main>
        <Intro />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
