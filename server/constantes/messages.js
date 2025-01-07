const messages = {
  bad_request_400: "The request contains a syntax error or invalid data",
  conflict_409: "The username is already taken",
  internal_server_error_500: "An unexpected error occurred on the server",
  not_found_404: "The resource was not found on the server",
  forbiden_403:
    "Cannot delete category because there are products associated with it",
  created_201: "The resource has been successfully created",
  ok_200:'The request was successfully completed',
  no_content_204:'Request completed successfully, but no content to return',
};

module.exports = messages;
