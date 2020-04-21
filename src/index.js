import { arrModule } from './arr';
import { stringModule } from './string';

export const arr = (arr, ...arg) => arrModule(arr, ...arg);
export const string = (string, ...arg) => stringModule(string, ...arg);
