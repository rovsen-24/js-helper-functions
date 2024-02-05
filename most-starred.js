const axios = require("axios");

async function fetchMostStarredProjects(startDate, endDate) {
  const url = `https://api.github.com/search/repositories?q=created:${startDate}..${endDate}&sort=stars&order=desc`;
  try {
    const response = await axios.get(url);
    const projects = response.data.items.slice(0, 10);
    projects.map((project, index) => {
      console.log(
        `${index + 1}) ${project.name} - ${project.html_url} (Stars: ${
          project.stargazers_count
        })`
      );
    });
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}
fetchMostStarredProjects(process.argv[2], process.argv[3]);
