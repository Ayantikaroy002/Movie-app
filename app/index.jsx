import React from 'react';
import TabNavigation from "./Navigation/TabNavigation";
import SplashScreen from "./pages/SplashScreen";
import { useState } from "react";
import { useEffect } from "react";

export default function Index() {
  const [showSplashScreen, setShowSplashScreen] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setShowSplashScreen(false);
    }, 5000);
  })
  return (
    <>
    {showSplashScreen ? <SplashScreen/> :
    <TabNavigation />} </>
  );
}
