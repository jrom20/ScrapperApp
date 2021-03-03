import React from "react";
import { getGitRepositoryCommits } from "../api/gitHubApi";
import CommitList from "./CommitList";

export default class CommitPage extends React.Component {
    state = { commits: [] };
  
    componentDidMount() {
        getGitRepositoryCommits().then((data) => {
        this.setState({ commits: data });
      });
    }
  
    render() {
      return (
        <CommitList commitList={this.state.commits}></CommitList>
      );
    }
}