import { useEffect, useState } from 'react';
import data from '../constants/data';
import ProjectPage from './ProjectPage';

const ProjectDataFetcher = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(data);
        setProjectData(response);
        console.log(projectData)
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     try {
  //       const response = await fetch(data);
  //       setProjectData(response);
  //       console.log(projectData)
  //     } catch (error) {
  //       console.error('Error fetching project data:', error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  return projectData ? <ProjectPage projectData={projectData} /> : <div>Loading...</div>;
  // return <ProjectPage projectData={projectData} />;
};

export default ProjectDataFetcher;