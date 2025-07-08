import axios from "axios";


export const fetchArticlesWithQuery = async searchQuery => {
        const apiA = axios.create({
                baseURL: "https://hn.algolia.com/api/v1",
              });
  const response = await apiA.get(`/search?query=${searchQuery}`);
  return response.data.hits;
};