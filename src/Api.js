const PROJECT_ID = 'infoboard-react';
const COLLECTION = 'retrospective';
const DOCUMENT_ID = '1';

const setData = () => {};

const getData = async () => {
  const response = await fetch(
    `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/${COLLECTION}/${DOCUMENT_ID}`,
  );
  const result = await response.json();
  return result;
};

export default { getData, setData };
