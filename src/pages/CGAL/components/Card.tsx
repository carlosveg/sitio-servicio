import { Card, CardContent, CardMedia, Typography } from '@mui/material'

const CardC = ({
  img,
  title,
  description,
  alt
}: {
  img: string
  title: string
  description: string
  alt: string
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        // height='140'
        image={img}
        alt={alt}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardC
