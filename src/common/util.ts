import { ABSOLUTE_ZERO_KELVIN_TEMP } from './constants';

export const convertKelvinToCelcius = (kelvin: number): number => {
  return Math.round(kelvin - ABSOLUTE_ZERO_KELVIN_TEMP);
};