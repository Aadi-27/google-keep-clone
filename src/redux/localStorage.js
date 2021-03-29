export const loadData = () => {
  try {
    const seralizedState = localStorage.getItem("state");
    if (seralizedState === null) {
      return undefined;
    }
    return JSON.parse(seralizedState);
  } catch (error) {
    return undefined;
  }
};

export const saveData = (state) => {
  try {
    const seralizedState = JSON.stringify(state);
    localStorage.setItem("state", seralizedState);
  } catch (error) {
    // rare errors so ignored for now
  }
};
