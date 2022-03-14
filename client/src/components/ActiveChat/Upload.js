import { CardMedia } from '@material-ui/core';

require('dotenv').config();
export const Upload = ({setAttachments}) => {
  
  const handleFileSelect = async (e) => {
    // generating the url of the photo
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append('file',file);
    formData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);
    const response = await fetch('https://api.cloudinary.com/v1_1/behshad-cloudinary/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    );
    const jsonResponse = await response.json();
    setAttachments((prev)=>[...prev, jsonResponse.secure_url]);
    document.getElementById('upload').setAttribute('style','color: green');
  }
  
  return (
    <CardMedia className='images'>
      <div id='upload' onClick={()=>{document.getElementById('image-upload').click()}}>
        <i className="fa-solid fa-image fa-3x" />
      </div>
      <input type='file' hidden={true} id='image-upload' accept='image/*' onChange={handleFileSelect}/>
    </CardMedia>
  );
}