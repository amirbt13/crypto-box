export const validation = (str: string) => {
  let error: string | null = "";

  if (!str) {
    error = "please fill the input";
  } else if (!str.trim()) {
    error = "please enter a valid asset name";
  } else {
    error = null;
  }

  return error;
};
