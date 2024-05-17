import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// In the code below, we define a utility function called cn. This function combines React and Tailwind class names using the clsx and twMerge functions.

export const cn = (...inputs) => {
  return twMerge(clsx(inputs))
}

// Example:

// import React from 'react'
// import cn from './utils/cn'

// const Button = () => {
//   return (
//     <button className={cn('btn', 'bg-red-500')}>
//       Click me
//     </button>
//   )
// }

// export default Button