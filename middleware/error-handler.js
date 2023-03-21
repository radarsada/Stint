const errorHandlerMiddleWare = (err, req, resp, next) => {
  console.log(err);
  resp.status(500).json({ msg: "there was an error" });
};
export default errorHandlerMiddleWare;
