/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import { formatInTimeZone } from 'date-fns-tz';

interface TimeLeft {
  days: number;
  daysDD: string;
  hours: number;
  hoursDD: string;
  mins: number;
  minsDD: string;
  secs: number;
  secsDD: string;
  isLessThanDay: boolean;
  countdownComplete: boolean;
  formattedDate: string;
  formattedTime: string;
}

export const useCountdown = (dateInMilli: number): TimeLeft => {
  const [timeInMilli, setTimeInMilli] = useState<number>(Date.now());

  // Global use variables
  const countdownComplete = timeInMilli >= dateInMilli;
  const dayInMilli = 86400000;
  const timeLeftInMilli = dateInMilli - timeInMilli < 0 ? 0 : dateInMilli - timeInMilli;

  // Calculate time left return data
  const isLessThanDay = timeLeftInMilli <= dayInMilli;
  const secs = timeLeftInMilli > 0 ? Math.floor(timeLeftInMilli / 1000) : 0;
  const mins = timeLeftInMilli > 0 ? Math.floor(secs / 60) : 0;
  const hours = timeLeftInMilli > 0 ? Math.floor(mins / 60) : 0;
  const days = timeLeftInMilli > 0 ? Math.floor(hours / 24) : 0;
  const secsMod = secs % 60;
  const minsMod = mins % 60;
  const hoursMod = hours % 24;
  const secsDD = secsMod.toString().length === 1 ? `0${secsMod}` : secsMod.toString();
  const minsDD = minsMod.toString().length === 1 ? `0${minsMod}` : minsMod.toString();
  const hoursDD = hoursMod.toString().length === 1 ? `0${hoursMod}` : hoursMod.toString();
  const daysDD = days.toString().length === 1 ? `0${days}` : days > 99 ? '99' : days.toString();

  // Date Formatting
  const descDateFormat = formatInTimeZone(new Date(dateInMilli), 'America/New_York', 'dd LLL yyyy');
  const descTimeFormat = formatInTimeZone(new Date(dateInMilli), 'America/New_York', 'ha zzz');

  useEffect(() => {
    const interval = setInterval(() => setTimeInMilli(Date.now()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (countdownComplete) {
    return {
      days: 0,
      daysDD: '00',
      hours: 0,
      hoursDD: '00',
      mins: 0,
      minsDD: '00',
      secs: 0,
      secsDD: '00',
      isLessThanDay: true,
      countdownComplete: true,
      formattedDate: descDateFormat,
      formattedTime: descTimeFormat,
    };
  }

  return {
    days,
    daysDD,
    hours,
    hoursDD,
    mins,
    minsDD,
    secs,
    secsDD,
    isLessThanDay,
    countdownComplete,
    formattedDate: descDateFormat,
    formattedTime: descTimeFormat,
  };
};
