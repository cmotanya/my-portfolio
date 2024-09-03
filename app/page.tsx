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
import Contact from "./contact";
import TopArrowButton from "./arrow-up";
import ToTopArrowButton from "./arrow-up";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentCached, setIsContentCached] = useState(false);
  const [cachedContent, setCachedContent] = useState({});
  const [isFirstLoad, setIsFirstLoad] = useState(true);

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

    const loadContent = async () => {
      // Simulate content loading (replace with actual data fetching if needed)
      // await new Promise((resolve) => setTimeout(resolve,));

      // Check if it's the first load
      const firstLoadKey = "motanya-first-load";
      const isFirstLoad = !localStorage.getItem(firstLoadKey);

      if (isFirstLoad) {
        // If it's the first load, set a minimum display time for the loader
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "auto";
          localStorage.setItem(firstLoadKey, "false");
        }, 2000); // 2 seconds minimum display time
      } else {
        // If it's not the first load, finish loading immediately
        setIsLoading(false);
        document.body.style.overflow = "auto";
      }
    };

    loadContent();

    return () => {
      document.body.style.overflow = "auto";
    };
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
        <Contact />
        <ToTopArrowButton />
      </main>
      <Footer />
    </>
  );
}
