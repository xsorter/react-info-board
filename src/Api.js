import axios from 'axios';

axios.defaults.baseURL =
  'https://firestore.googleapis.com/v1/projects/infoboard-react/databases/(default)/documents';

const COLLECTION = 'retrospective';

//TODO: cancel subscribtions
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const setData = async data => {
  const response = await axios({
    method: data.edit ? 'PATCH' : 'POST',
    url: data.edit ? `/${COLLECTION}/${data.id}/` : `/${COLLECTION}?documentId=${data.id}`,
    data: data.requestBody,
  });

  return response.data
};

const getData = async () => {
  const response = await axios.get(`/${COLLECTION}?orderBy=timestampClient+desc`);
  return response.data;
};

const getUsers = async (isResponsible) => {
  const response = await axios({
    method: 'GET',
    url: isResponsible ? `/responsibleUser/` : `/users/`,
  });
  return response.data;
};

const setUser = async (userId) => {
  const response = await axios({
    method: 'PATCH',
    url: `/responsibleUser/user`,
    data: {
      fields: {
        id: {stringValue: userId}
      }
    }
  });
  return response.status
}

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
  return response.status;
};

export default { getData, setData, deleteData, getSingleItem, getUsers, setUser };
