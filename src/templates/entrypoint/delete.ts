export const Template = `type Delete struct {
	UseCase usecases.Delete
}

func (h *Delete) Handle(c *gin.Context) {

	params := c.MustGet("validated").(paraval.Validated)
	%%%Name.Lowercase%%%ID := params["%%%Name.Lowercase%%%ID"]

	err := h.UseCase.Execute(c, %%%Name.Lowercase%%%ID)
	if err != nil {
		var status int
		var message string

		switch err {
		case errors.ErrDeleting%%%Name%%%:
			status, message = http.StatusInternalServerError, "No se pudo eliminar"
		default:
			status, message = http.StatusInternalServerError, "Algo salió mal"
		}

		c.JSON(status, gin.H{"description": message})
		return
	}

	c.JSON(http.StatusOK, gin.H{"description": ""})
}

`
