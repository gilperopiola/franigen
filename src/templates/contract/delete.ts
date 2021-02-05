export const Template = `type Delete%%%Name%%%Response struct {
	ID   uint   %%%Backtick%%%json:"id"%%%Backtick%%%
	Name string %%%Backtick%%%json:"name"%%%Backtick%%%
}

func NewDeleteResponse(%%%Name.Lowercase%%% *entities.%%%Name%%%) *Delete%%%Name%%%Response {
	return &Delete%%%Name%%%Response{
		ID:   %%%Name.Lowercase%%%.ID,
		Name: %%%Name.Lowercase%%%.Name,
	}
}
`
