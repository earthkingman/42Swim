import { useState } from 'react'
import theme from '../../../../style/theme'

const ArrowFront = (props: { onClick: () => void }) => {
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
      {...props}
    >
      <path
        d="M13.775 1.39185C13.1625 0.789306 12.175 0.789306 11.5625 1.39185L1.17501 11.6105C0.687512 12.0901 0.687512 12.8648 1.17501 13.3443L11.5625 23.563C12.175 24.1655 13.1625 24.1655 13.775 23.563C14.3875 22.9604 14.3875 21.989 13.775 21.3865L4.72501 12.4713L13.7875 3.55609C14.3875 2.96584 14.3875 1.9821 13.775 1.39185Z"
        fill={isHover ? theme.color.lightblack : theme.color.black}
      />
    </svg>
  )
}

export default ArrowFront
