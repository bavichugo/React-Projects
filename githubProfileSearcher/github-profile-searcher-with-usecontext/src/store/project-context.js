import React, { useState } from "react";

// App "store" that manages multiple states
export const ProjectContext = React.createContext({
  username: "",
  avatarURL: "",
  repoList: [],
  firstExecution: true, // Used to hide the repo list before first search
  showErrorModal: false,
  isLoading: false,
  setShowErrorModal: () => {},
  setUserInfo: (username, avatarURL, repoList) => {},
  setIsLoading: () => {},
});

const ProjectContextProvider = (props) => {
  const [user_name, setUsername] = useState("Search for a username!");
  const [avatar_url, setAvatarURL] = useState(
    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  );
  const [repo_list, setRepoList] = useState([]);
  const [first_execution, setFirstExecution] = useState(true);
  const [show_error_modal, _setShowErrorModal] = useState(false);
  const [is_loading, _setIsLoading] = useState(false);

  const setUserInfoHandler = (username, avatarURL = "", repoList = []) => {
    setUsername(username);
    setAvatarURL(avatarURL);
    setRepoList(repoList);
    setFirstExecution(false);
  };

  const projectContextValues = {
    username: user_name,
    avatarURL: avatar_url,
    repoList: repo_list,
    firstExecution: first_execution,
    showErrorModal: show_error_modal,
    isLoading: is_loading,
    setShowErrorModal: _setShowErrorModal,
    setUserInfo: setUserInfoHandler,
    setIsLoading: _setIsLoading,
  };

  return (
    <ProjectContext.Provider value={projectContextValues}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
