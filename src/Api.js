const PROJECT_ID = 'infoboard-react';
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
    testItem.edit
      ? `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/
    (default)/documents/${COLLECTION}/${testItem.id}`
      : `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/
    (default)/documents/${COLLECTION}?documentId=${testItem.id}`,
    postConfig,
  );
  const result = await response.json();
  return result;
};

const getData = async () => {
  const response = await fetch(
    `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/
    (default)/documents/${COLLECTION}/${DOCUMENT_ID}`,
  );
  const result = await response.json();
  return result;
};

const deleteData = async () => {
  const response = await fetch(
    `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/
    (default)/documents/${COLLECTION}/${DOCUMENT_ID}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const result = await response.json();
  return result;
};

export default { getData, setData, deleteData };
