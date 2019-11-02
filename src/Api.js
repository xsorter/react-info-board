const PROJECT_ID = 'infoboard-react';

const setData = () => {};

const getData = async () => {
  const response = await fetch(
    `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/**COLLECTION_ID**?&key=(YOUR API KEY)`,
  );
  const result = await result.json();
};

export default { getData, setData };
