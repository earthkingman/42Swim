import Text from '../../atoms/Text'
import ThumbDownBtn from '../../atoms/thumbDownBtn'
import ThumbUpBtn from '../../atoms/thumbUpBtn'
import { ThumbCountWrapper } from './style'

type thumbType = 'up' | 'down'

export interface Props {
  count?: string
  thumb?: thumbType
  onUpClick?: any
  onDownClick?: any
}

const ThumbCount = ({ count, onUpClick, onDownClick, thumb }: Props) => {
  return (
    <ThumbCountWrapper>
      <ThumbUpBtn onClick={onUpClick} active={thumb == 'up' ? true : false} />
      <Text color="lightgray" size="48">
        {count}
      </Text>
      <ThumbDownBtn
        onClick={onDownClick}
        active={thumb == 'down' ? true : false}
      />
    </ThumbCountWrapper>
  )
}

export default ThumbCount
