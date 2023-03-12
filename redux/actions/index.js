export const addItem = (payload) => {
  return {
    type: "ADD",
    payload
  };
};

export const delItem = (payload) => {
  return {
    type: "DEL",
    payload
  };
};
