import React, { useState } from "react";

export const ProjectContext = React.createContext({
  username: "",
  avatarURL: "",
  repoList: [],
  firstExecution: true,
  setUserInfo: (username, avatarURL, repoList) => {},
});

const ProjectContextProvider = (props) => {
  const [user_name, setUsername] = useState("Search for a username!");
  const [avatar_url, setAvatarURL] = useState(
    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  );
  const [repo_list, setRepoList] = useState([]);
  const [first_execution, setFirstExecution] = useState(true);

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
    setUserInfo: setUserInfoHandler,
  };

  return (
    <ProjectContext.Provider value={projectContextValues}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;

// export const ProjectContext = React.createContext({
//   username: "",
//   avatarURL: "",
//   repoList: [],
//   setUsername: (username) => {},
//   setAvatarURL: (avatarURL) => {},
//   setRepoList: (repoList) => {},
// });

// const ProjectContextProvider = (props) => {
//   const [uname, setUname] = useState("bavichugo");
//   const [avatarurl, setAvatarurl] = useState("");
//   const [repos, setRepos] = useState([]);

//   const usernameHandler = (username) => {
//     console.log("Inside username handler");
//     setUname(username);
//   };

//   const contextValue = {
//     username: uname,
//     avatarURL: avatarurl,
//     repoList: repos,
//     setUsername: usernameHandler,
//     setAvatarURL: setAvatarurl,
//     setRepoList: setRepos,
//   };

//   return (
//     <ProjectContext.Provider value={contextValue}>
//       {props.children}
//     </ProjectContext.Provider>
//   );
// };

// export default ProjectContextProvider;