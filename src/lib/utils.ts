import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateRandomColor = () => {
  let color = Math.floor(Math.random() * 0xffffff).toString(16)
  color = ('000000' + color).slice(-6)
  return '#' + color
}
