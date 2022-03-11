export const Attachments = (images) => {
  return <div className="images">
    {images.images && images.images.map((image,index)=>{
    return <img key={index} src={image} alt={`img-${index}`} width='220px' height='200px' />
  })}
  </div>
}