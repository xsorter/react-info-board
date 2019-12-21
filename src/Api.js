import axios from 'axios';

const COLLECTION = 'retrospective';

const setData = async data => {
  const response = await axios({
    method: data.edit ? 'PATCH' : 'POST',
    url: data.edit ? `/${COLLECTION}/${data.id}/` : `/${COLLECTION}?documentId=${data.id}`,
    data: data.requestBody,
  });
  return response.data;
};

const getData = async () => {
  const response = await axios.get(`/${COLLECTION}?orderBy=timestampClient+desc`);
  return response.data;
};

const getUsers = async () => {
  const response = await axios.get(`/users/`);
  return response.data;
};

const getSingleItem = async (documentId) => {
  const response = await axios.get(`/${COLLECTION}/${documentId}`);
  return response.data;
};

const deleteData = async (documentId) => {
  const response = await axios.delete(`/${COLLECTION}/${documentId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export default { getData, setData, deleteData, getSingleItem, getUsers };
