import axios from 'axios'

const uploadImage = async (file) => {
  if(!file) return

  try {
    const formData = new FormData();
    formData.append('upload_preset', 'pbb8m9cx');
    formData.append('file', file);

    const url = 'https://api.cloudinary.com/v1_1/xiknal/image/upload';
    const {data} = await axios.post(url, formData);
    return data.secure_url;
  } catch (error) {
    console.log('Error', error);
    return null
  }
}

export default uploadImage;