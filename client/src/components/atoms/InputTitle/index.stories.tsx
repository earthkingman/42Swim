import InputTitle from './index'

export default {
  title: 'Atoms/InputTitle',
  component: InputTitle,
}

export const Default = (props: any) => {
  return <InputTitle placeholder="제목을 입력하세요" {...props} />
}
