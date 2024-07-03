import { useState } from "react";
import NewProject from "./component/NewProject";
import NoProjectSelected from "./component/NoProjectSelected";
import Sidebar from "./component/Sidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  //selectedProjectId null로 변경해서 component변경
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  //selectedProjectId undefined로 변경해서 component변경
  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  //State안에 projects 배열에 새로운 오브젝트 넣는 함수
  function handleAddProject(projectDate) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      //받아온 데이터를 새변수에 분해해서 넣기 + 고유 아이디 생성
      const newProject = {
        ...projectDate,
        id: projectId,
      };
      //기본값 분해해서 넣고 projects 안에 새변수 삽입 원래있던 projects 배열도  분해해서 삽입
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content;

  //selectedprojectid 가 undefined 면 초기화면 null이면 생성화면
  if (projectsState.selectedProjectId === undefined) {
    //초기화면일때 State 값을 변경해주는 함수를 props로 넣어주기
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          onStartAddProject={handleStartAddProject}
          projects={projectsState.projects}
        />
        {content}
      </main>
    </>
  );
}

export default App;
