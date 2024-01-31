import axios from "axios";

export const fetchUserData = async (userName) => {
  const result = await axios.get(`https://api.github.com/users/${userName}`);
  if (result.status === 200) {
    return {
      login: result.data.login,
      avatar_url: result.data.avatar_url,
      name: result.data.name,
      company: result.data.company,
      location: result.data.location,
      blog: result.data.blog,
      bio: result.data.bio,
      public_repos: result.data.public_repos,
      followers: result.data.followers,
      following: result.data.following,
      created_at: new Date(result.data.created_at).toLocaleDateString(),
    };
  } else {
    throw new Error("User not found");
  }
};
