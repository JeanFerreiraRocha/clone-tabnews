function status(request, response) {
  response.status(200).json({ message: "pagina de status" });
}

export default status;
