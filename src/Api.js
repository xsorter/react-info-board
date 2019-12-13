import axios from 'axios';

const COLLECTION = 'retrospective';
const DOCUMENT_ID = '1';

const testItem = {
  edit: false,
  id: 43,
  requestBody: {
    fields: {
      title: { stringValue: 'test data to POST' },
      text: { stringValue: 'this is test text from POST request' },
    },
  },
};

const postConfig = {
  method: testItem.edit ? 'PATCH' : 'POST',
  cache: 'no-cache',
  credentials: 'same-origin',
  connection: 'keep-alive',
  headers: {
    'Content-Type': 'application/json',
  },
  referrer: 'no-referrer',
  body: JSON.stringify(testItem.requestBody),
};

const setData = async () => {
  const response = await fetch(
    testItem.edit ? `/${COLLECTION}/${testItem.id}` : `/${COLLECTION}?documentId=${testItem.id}`,
    postConfig,
  );
  return response.data;
};

const getData = async () => {
  const response = await fetch(`/${COLLECTION}/`);
  return response.data;
};

const getUsers = async () => {
  const response = await axios.get(`/users/`);
  return response.data;
};

const getSingleItem = async () => {
  const response = await fetch(`/${COLLECTION}/${DOCUMENT_ID}`);
  return response.data;
};

const deleteData = async () => {
  const response = await fetch(`/${COLLECTION}/${DOCUMENT_ID}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export default { getData, setData, deleteData, getSingleItem, getUsers };
