export const Template = `type Single struct {
	UseCase usecases.Single
}

func (h *Single) Handle(c *gin.Context) {

	params := c.MustGet("validated").(paraval.Validated)
	%%%Name.Lowercase%%%ID := params["%%%Name.Lowercase%%%ID"]

	res, err := h.UseCase.Execute(c, %%%Name.Lowercase%%%ID)
	if err != nil {
		var status int
		var message string

		switch err {
		case errors.ErrGetting%%%Name%%%:
			status, message = http.StatusInternalServerError, "No se pudo obtener"
		default:
			status, message = http.StatusInternalServerError, "Algo salió mal"
		}

		c.JSON(status, gin.H{"description": message})
		return
	}

	c.JSON(http.StatusOK, gin.H{"description": map[string]interface{}{"%%%Name.Lowercase%%%": res}})
}
`
