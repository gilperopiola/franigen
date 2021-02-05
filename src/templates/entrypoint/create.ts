export const Template = `type Create struct {
	UseCase usecases.Create
}

func (h *Create) Handle(c *gin.Context) {

	req, err := h.bindRequest(c)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"description": "No se pudo leer la solicitud: " + err.Error()})
		return
	}

	err = req.Check()
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"description": fmt.Sprintf("Información errónea o faltante: %s", err)})
		return
	}

	res, err := h.UseCase.Execute(c, req)
	if err != nil {
		var status int
		var message string

		switch err {
		case errors.ErrCreating%%%Name%%%:
			status, message = http.StatusInternalServerError, "No se pudo crear"
		default:
			status, message = http.StatusInternalServerError, "Algo salió mal"
		}

		c.JSON(status, gin.H{"description": message})
		return
	}

	c.JSON(http.StatusOK, gin.H{"description": map[string]interface{}{"%%%Name.Lowercase%%%": res}})
}

func (Create) bindRequest(c *gin.Context) (contracts.Create%%%Name%%%Request, error) {
	var req contracts.Create%%%Name%%%Request
	err := c.ShouldBindJSON(&req)
	if err != nil {
		return req, err
	}
	return req, nil
}
`
