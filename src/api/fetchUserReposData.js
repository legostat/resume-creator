import axios from "axios";

export const fetchUserReposData = async (userName) => {
  const result = await axios.get(
    `https://api.github.com/users/${userName}/repos`
  );
  if (result.status === 200) {
    return result.data;
  } else {
    throw new Error("User not found");
  }
};
