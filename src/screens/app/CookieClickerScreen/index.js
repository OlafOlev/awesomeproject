import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import {styles} from "./styles";
import Button from "../../../components/Button"

const CookieClickerScreen = () => {
  const [cookieCount, setCookieCount] = useState(0);
  const [upgradeLevel, setUpgradeLevel] = useState(0);
  const [upgradeCost, setUpgradeCost] = useState(10);
  const [booster, setBooster] = useState(1);
  const [autoClickerPurchased, setAutoClickerPurchased] = useState(false);
  const [actionFrequency, setActionFrequency] = useState(10000); // Default action frequency: 10 seconds
  const [reduceTimeCost, setReduceTimeCost] = useState(0.1); // Initial cost to reduce time between actions
  const [autoClickerSpeed, setAutoClickerSpeed] = useState(10000); // Speed of automatic cookie clicker in milliseconds
  const [autoClickerCookies, setAutoClickerCookies] = useState(0); // Cookies gained from automatic cookie clicker

  useEffect(() => {
    let intervalId;
    if (autoClickerPurchased) {
      intervalId = setInterval(() => {
        // Increment cookie count based on multiplier
        const cookiesPerAction = 0.1 * booster;
        setCookieCount(prevCount => prevCount + cookiesPerAction);
        setAutoClickerCookies(cookiesPerAction); // Set the cookies gained per action for display
      }, actionFrequency);
    }
    return () => clearInterval(intervalId);
  }, [autoClickerPurchased, booster, actionFrequency]);

  const handleCookieClick = () => {
    setCookieCount(cookieCount + booster);
  };

  const handleUpgrade = () => {
    if (cookieCount >= upgradeCost) {
      setCookieCount(cookieCount - upgradeCost);
      setUpgradeLevel(upgradeLevel + 1);
      setBooster(booster * 1.5);
      setUpgradeCost(Math.ceil(upgradeCost * 1.5));
      setAutoClickerCookies(0.1 * booster); // Update cookies per action when upgrading the cookie multiplier
    }
  };

  const handleAutoClickerPurchase = () => {
    if (cookieCount >= 2 && !autoClickerPurchased) {
      setCookieCount(cookieCount - 2);
      setAutoClickerPurchased(true);
    }
  };

  const handleReduceTimeUpgrade = () => {
    if (cookieCount >= reduceTimeCost && actionFrequency > 100) {
      let newFrequency = actionFrequency * 0.75;
      if (newFrequency < 100) newFrequency = 100; // Cap the frequency at 100 milliseconds (0.1 seconds)
      setCookieCount(cookieCount - reduceTimeCost);
      setActionFrequency(newFrequency);
      setAutoClickerSpeed(prevSpeed => Math.max(prevSpeed * 0.75, 100)); // Reduce automatic clicker speed by 25%
      setReduceTimeCost(Math.ceil(reduceTimeCost * 1.5));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cookieSection}>
        <Text style={styles.cookieCount}>Cookies: {cookieCount.toFixed(1)}</Text>
      </View>
        <Button title="Get your cookie!" onPress={handleCookieClick} />
      <View style={styles.upgradeSection}>
        <Text style={styles.upgradeTitle}>Upgrade: Cookie Multiplier</Text>
        <Text style={styles.upgradeInfo}>Level: {upgradeLevel}</Text>
        <Text style={styles.upgradeInfo}>Cost: {upgradeCost.toFixed(1)} cookies</Text>
        <Text style={styles.upgradeInfo}>Multiplier: {booster.toFixed(1)}</Text>
        <Button title="Upgrade" onPress={handleUpgrade} />
      </View>
      <View style={styles.upgradeSection}>
        <Text style={styles.upgradeTitle}>Upgrade: Automatic Cookie Clicker</Text>
        <Text style={styles.upgradeInfo}>Cost: 2500 cookies</Text>
        <Text style={styles.upgradeInfo}>Speed: {(autoClickerSpeed / 1000).toFixed(1)} seconds per action</Text>
        <Text style={styles.upgradeInfo}>Cookies per action: {autoClickerCookies.toFixed(1)}</Text>
        {!autoClickerPurchased && <Button title="Purchase Auto Clicker" onPress={handleAutoClickerPurchase} />}
      </View>
      {actionFrequency > 100 && (
        <View style={styles.upgradeSection}>
          <Text style={styles.upgradeTitle}>Upgrade: Reduce Time Between Actions</Text>
          <Text style={styles.upgradeInfo}>Cost: {reduceTimeCost.toFixed(1)} cookies</Text>
          <Button title="Reduce Time" onPress={handleReduceTimeUpgrade} />
        </View>
      )}
    </View>
  );
};


export default CookieClickerScreen;
