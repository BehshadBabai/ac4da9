import { ImageList } from "@material-ui/core"

export const Attachments = (images) => {
  return <ImageList cols={images.images.length}>
    {images.images && images.images.map((image,index)=>{
    return <img key={index} src={image} alt={`img-${index}`} width='220px' height='200px' />
  })}
  </ImageList>
}