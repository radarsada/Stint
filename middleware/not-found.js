const notFoundMiddleWare = (req, resp) => {
  resp.status(404).send("Route does not Found");
};
export default notFoundMiddleWare;
