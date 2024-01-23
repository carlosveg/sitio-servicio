import { ImageList, ImageListItem } from '@mui/material'

interface data {
  img: string
  title: string
}

const ImageListC = ({ itemData, cols }: { itemData: data[]; cols: number }) => {
  return (
    <ImageList sx={{ width: '100%', height: 450 }} cols={cols} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading='lazy'
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default ImageListC
