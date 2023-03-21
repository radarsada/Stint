const createJob = async (req, resp) => {
  resp.send("create Job");
};
const getAllJobs = async (req, resp) => {
  resp.send("get all Jobs");
};
const updateJob = async (req, resp) => {
  resp.send("update job");
};
const showStats = async (req, resp) => {
  resp.send("show stats");
};
const deleteJob = async (req, resp) => {
  resp.send("delete job");
};
export { createJob, getAllJobs, updateJob, showStats, deleteJob };
