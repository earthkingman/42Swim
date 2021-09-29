import { useState } from 'react'
import theme from '../../../../style/theme'
const ArrowBack = () => {
  const [isHover, setIsHover] = useState(false)
  const handleMouseEnter = (e: any) => {
    setIsHover(true)
    e.target.style.cursor = 'pointer'
    e.stopPropagation()
  }
  const handleMouseLeave = () => {
    setIsHover(false)
  }
  return (
    <svg
      width="15"
      height="25"
      viewBox="0 0 15 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <path
        d="M1.225 23.5507C1.8375 24.1532 2.825 24.1532 3.4375 23.5507L13.825 13.332C14.3125 12.8524 14.3125 12.0777 13.825 11.5982L3.4375 1.37952C2.825 0.776976 1.8375 0.776976 1.225 1.37952C0.612503 1.98206 0.612503 2.95351 1.225 3.55605L10.275 12.4712L1.2125 21.3864C0.612503 21.9767 0.612503 22.9604 1.225 23.5507Z"
        fill={isHover ? theme.color.lightblack : theme.color.black}
      />
    </svg>
  )
}

export default ArrowBack
