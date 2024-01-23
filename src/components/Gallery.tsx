import Carousel from 'react-material-ui-carousel'

interface items {
  img: string
  title: string
}

const Gallery = ({ items }: { items: items[] }) => {
  return (
    <Carousel animation='slide' navButtonsAlwaysVisible={true}>
      {items.map((img) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <img src={img.img} className='img' />
        </div>
      ))}
    </Carousel>
  )
}

export default Gallery
