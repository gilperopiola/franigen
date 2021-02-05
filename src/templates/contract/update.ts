export const Template = `type Update%%%Name%%%Request struct {
	ID   uint   %%%Backtick%%%json:"id"%%%Backtick%%%
	Name string %%%Backtick%%%json:"name" binding:"required"%%%Backtick%%%
}

func (r Update%%%Name%%%Request) New%%%Name%%%() *entities.%%%Name%%% {
	return &entities.%%%Name%%%{
		Model: gorm.Model{ID: r.ID},
		Name:  r.Name,
	}
}

func (r Update%%%Name%%%Request) Check() error {
	if r.ID == 0 {
		return errors.NewMissingFieldError("id")
	}
	return nil
}

type Update%%%Name%%%Response struct {
	%%%Name%%% entities.%%%Name%%% %%%Backtick%%%json:"%%%Name.Lowercase%%%"%%%Backtick%%%
}

func NewUpdateResponse(%%%Name.Lowercase%%% entities.%%%Name%%%) *Update%%%Name%%%Response {
	return &Update%%%Name%%%Response{
		%%%Name%%%: %%%Name.Lowercase%%%,
	}
}
`
