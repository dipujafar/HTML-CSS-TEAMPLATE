const imageUpload = async (image) => {
  try {
    const formData = new FormData();
    formData.append("image", image);
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=d0961155512c7680bbfe5db71c49268d`,
      formData,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );
    return data?.data?.url;
  } catch (err) {
    return err;
  }
};
