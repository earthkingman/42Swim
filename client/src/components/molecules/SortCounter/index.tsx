import { ColumnSBDiv } from '../../atoms/Div'
import Text from '../../atoms/Text'

export interface Props {
  name: string
  count: number
}

const SortCounter = ({ name, count, ...props }: Props) => {
  return (
    <ColumnSBDiv width="40px" height="74px" {...props}>
      <Text weight="bold" size="18">
        {name}
      </Text>
      <Text weight="bold" size="18">
        {count}
      </Text>
    </ColumnSBDiv>
  )
}

export default SortCounter
