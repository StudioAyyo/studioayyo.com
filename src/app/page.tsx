"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Close mobile nav on nav link click or overlay click
  const closeMobileNav = () => {
    setMobileNavOpen(false);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "";
    }
  };

  // Open/close mobile nav
  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => {
      if (!prev && typeof window !== "undefined") {
        document.body.style.overflow = "hidden";
      } else if (typeof window !== "undefined") {
        document.body.style.overflow = "";
      }
      return !prev;
    });
  };

  // Close mobile nav when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileNavOpen) {
        closeMobileNav();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileNavOpen]);

  return (
    <>
      <header className="header">
        <div className="logo">StudioAyyo</div>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        
        {/* Burger Menu Button */}
        <div
          className={`burger-menu${mobileNavOpen ? " active" : ""}`}
          onClick={toggleMobileNav}
          aria-label="Open mobile navigation"
          tabIndex={0}
          role="button"
          onKeyDown={e => { if (e.key === "Enter" || e.key === " ") toggleMobileNav(); }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`mobile-nav${mobileNavOpen ? " active" : ""}`}>
          <ul>
            <li><a href="#about" onClick={closeMobileNav}>About</a></li>
            <li><a href="#work" onClick={closeMobileNav}>Work</a></li>
            <li><a href="#contact" onClick={closeMobileNav}>Contact</a></li>
          </ul>
        </div>
      </header>
      
      {/* Overlay for mobile nav */}
      <div
        className="overlay"
        style={{ display: mobileNavOpen ? "block" : "none" }}
        onClick={closeMobileNav}
      ></div>
      
      <main>
        <div className="logo-container">
          <Image
            src="/ayyo-logo.png"
            alt="StudioAyyo Logo"
            className="logo-image"
            width={150}
            height={150}
            priority
          />
        </div>
        <h1><span>Website</span> <span>Launching</span> <span>Soon</span></h1>
        <p><span>Hang tight,</span> <span>we’re cooking up</span> <span>something fresh!</span></p>
      </main>
    </>
  );
}
