import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { HomeVideoBackground } from "../components/HomeVideoBackground";
import { HomeInfo } from "../components/HomeInfo";
import { HomeSecondBackground } from "../components/HomeSecondBackground";
import { Footer } from "../components/Footer";

export const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (!loading) return;
    // inits
    setLoading(false);
  }, []);

  return (
    // TEST CODE
    <>
      <HomeVideoBackground />
      <HomeInfo />
      <HomeSecondBackground />
    </>
  );
};
