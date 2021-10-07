import Header from '../../organisms/Header'
import BasicTemplate from '../BasicTemplate'

interface DetailProps {
  isLogin?: boolean
  nickname?: string
}

const Detail = ({ isLogin, nickname }: DetailProps) => {
  return (
    <BasicTemplate
      header={<Header isLogin={isLogin} nickname={nickname} />}
      content={}
      footer={}
    />
  )
}

export default Detail
