import React from 'react';
import { Button } from '@storybook/react/demo';
import SplashScreen from "../components/SplashScreen/SplashScreen";


export default { title: 'Button' };

export const withText = () => <Button><h1>Usama</h1></Button>;

export const withEmoji = () => (
  <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
);

export const splashScreen=()=> (<SplashScreen></SplashScreen>);