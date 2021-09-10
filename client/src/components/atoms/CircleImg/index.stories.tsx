import CircleImg, { SCircleImg } from './index'

export default {
  title: 'Atoms/CircleImg',
  component: CircleImg,
}

export const Default = (props: SCircleImg) => {
  return <CircleImg {...props} />
}

export const Img = (props: SCircleImg) => {
  return (
    <CircleImg
      img="https://www.facebook.com/images/fb_icon_325x325.png"
      {...props}
    />
  )
}
