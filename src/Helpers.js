const helpers = {
  idGenerator: () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      let r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  },

  getShortDate: () => {
    const date = new Date();
    return date.toJSON().slice(0, 10);
  },

  getFullDate: () => {
    return new Date();
  }
}


export default helpers;
