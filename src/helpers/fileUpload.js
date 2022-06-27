export const fileUpload = async (file) => {
    const CloudUrl =  'https://api.cloudinary.com/v1_1/dnba8l8ws/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);
    try {
        const res = await fetch(CloudUrl,{
            method: 'POST',
            body: formData
        })
        if (res.ok) {
             const CloudRes = await res.json();
             return CloudRes.secure_url;
        }
        else{
            throw await res.json();
        }


    } catch (error) {
        throw error
    }
};
