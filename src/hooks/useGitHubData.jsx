import { useEffect, useReducer } from "react";
import { fetchUserData } from "../api/fetchUserData";
import { fetchUserReposData } from "../api/fetchUserReposData";

const userReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        loading: true,
      };
    case "success":
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case "fail":
      return {
        loading: false,
        error: action.payload,
        data: null,
      };
    default:
      throw new Error("Unknown action type");
  }
};

export const useGitHubData = (userName) => {
  const [userData, dispatch] = useReducer(userReducer, {
    loading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch({ type: "loading" });
        const personalResult = await fetchUserData(userName);
        const reposResult = await fetchUserReposData(userName);
        dispatch({
          type: "success",
          payload: { user: personalResult, repos: reposResult },
        });
      } catch (error) {
        dispatch({ type: "fail", payload: error.message });
        console.log(error.message);
      }
    };
    getData();
  }, [userName]);

  return userData;
};
