import axios from 'axios';

const COLLECTION = 'retrospective';
const DOCUMENT_ID = '1';

/*const testItem = {
  edit: false,
  id: 43,
  requestBody: {
    fields: {
      title: { stringValue: 'test data to POST' },
      text: { stringValue: 'this is test text from POST request' },
    },
  },
};*/

const setData = async data => {
  const response = await axios({
    method: data.edit ? 'PATCH' : 'POST',
    url: data.edit ? `/${COLLECTION}/${data.id}/` : `/${COLLECTION}?documentId=${data.id}`,
    data: data.requestBody,
  });
  return response.data;
};

const getData = async () => {
  const response = await axios.get(`/${COLLECTION}/`);
  return response.data;
};

const getUsers = async () => {
  const response = await axios.get(`/users/`);
  return response.data;
};

const getSingleItem = async () => {
  const response = await axios.get(`/${COLLECTION}/${DOCUMENT_ID}`);
  return response.data;
};

const deleteData = async () => {
  const response = await axios.delete(`/${COLLECTION}/${DOCUMENT_ID}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export default { getData, setData, deleteData, getSingleItem, getUsers };
