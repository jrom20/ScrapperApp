import { handleResponse, handleError } from "./apiUtils";
const baseUrl = `https://api.github.com/repos/${process.env.REACT_APP_API_USER}/${process.env.REACT_APP_API_PROJECT}/commits`;

export function getGitRepositoryCommits() {
    console.log(baseUrl)
    return fetch(baseUrl).then(handleResponse).catch(handleError);
}