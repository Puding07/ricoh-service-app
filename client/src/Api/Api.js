export const getReq = async (uri, options) => {
  return fetch(uri, options)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return { message: res.status, success: false };
      }
    })
    .then((data) => {
      if (data.success) {
        return { message: data.data, success: true };
      } else {
        return { message: data.message, success: false };
      }
    })
    .catch((error) => ({ message: error, success: false }));
};
