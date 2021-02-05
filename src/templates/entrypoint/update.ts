export const Template = `type Update struct {
	UseCase usecases.Update
}

func (h *Update) Handle(c *gin.Context) {

	params := c.MustGet("validated").(paraval.Validated)
	%%%Name.Lowercase%%%ID := params["%%%Name.Lowercase%%%ID"]

	req, err := h.bindRequest(c)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"description": "No se pudo leer la solicitud: " + err.Error()})
		return
	}

	req.ID = %%%Name.Lowercase%%%ID

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
		case errors.ErrUpdating%%%Name%%%:
			status, message = http.StatusInternalServerError, "No se pudo actualizar"
		default:
			status, message = http.StatusInternalServerError, "Algo salió mal"
		}

		c.JSON(status, gin.H{"description": message})
		return
	}

	c.JSON(http.StatusOK, gin.H{"description": res})
}

func (Update) bindRequest(c *gin.Context) (contracts.Update%%%Name%%%Request, error) {
	var req contracts.Update%%%Name%%%Request
	err := c.ShouldBindJSON(&req)
	if err != nil {
		return req, err
	}
	return req, nil
}
`
