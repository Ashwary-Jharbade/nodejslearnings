const apiResponse = (message, status_code = 200, data = {}, error = null) => {
  const response = {
    data,
    meta: {
      status_code,
    },
  };
  if (!error) {
    response.meta["message"] = message;
    return response;
  }
  response.meta["error"] = error;
  return response;
};

module.exports = apiResponse;
