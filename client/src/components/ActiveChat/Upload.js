import { Grid } from "@material-ui/core";

export const Upload = ({ otherUser, conversationId, user, postMessage }) => {
  
  const handleFileSelect = async (e) => {
    // generating the url of the photo
    const cld_upload_preset = 'lbsxzwhr';
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append('file',file);
    formData.append('upload_preset', cld_upload_preset)
    const response = await fetch('https://api.cloudinary.com/v1_1/behshad-cloudinary/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    );
    const jsonResponse = await response.json();
    const reqBody = {
      text: jsonResponse.secure_url,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
    };
    await postMessage(reqBody);
  }
  
  return (
    <Grid container item xs={2} md={1} justifyContent='center' alignContent='center'>
      <div id='upload' onClick={()=>{document.getElementById('image-upload').click()}}>
        <i className="fa-solid fa-image fa-3x"></i>
      </div>
      <input type='file' hidden={true} id='image-upload' accept='image/*' onChange={handleFileSelect}/>
    </Grid>
  );
}