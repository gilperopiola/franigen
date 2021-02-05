export const Template = `type Create%%%Name%%%Request struct {
	Name string %%%Backtick%%%json:"name" binding:"required"%%%Backtick%%%
}

func (r Create%%%Name%%%Request) New%%%Name%%%() *entities.%%%Name%%% {
	return &entities.%%%Name%%%{
		Name: r.Name,
	}
}

func (r Create%%%Name%%%Request) Check() error {
	return nil
}

type Create%%%Name%%%Response struct {
	ID   uint   %%%Backtick%%%json:"id"%%%Backtick%%%
	Name string %%%Backtick%%%json:"name"%%%Backtick%%%
}

func NewCreateResponse(%%%Name.Lowercase%%% *entities.%%%Name%%%) *Create%%%Name%%%Response {
	return &Create%%%Name%%%Response{
		ID:   %%%Name.Lowercase%%%.ID,
		Name: %%%Name.Lowercase%%%.Name,
	}
}
`
