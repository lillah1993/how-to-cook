export const setCurrentList = (list) => ({
  type: "SET_CURRENT_LIST",
  payload: list,
});

export const goNext = () => ({
  type: "GO_NEXT",
});

export const goBack = () => ({
  type: "GO_BACK",
});

export const setNextPageState = (more) => ({
  type: "SET_NEXTPAGE_STATE",
  payload: more,
});
export const setElementId = (id) => ({
  type: "SET_ELEMENT_ID",
  payload: id,
});
