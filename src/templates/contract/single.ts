export const Template = `type Single%%%Name%%%Response struct {
	ID   uint   %%%Backtick%%%json:"id"%%%Backtick%%%
	Name string %%%Backtick%%%json:"name"%%%Backtick%%%
}

func NewSingle%%%Name%%%Response(%%%Name.Lowercase%%% *entities.%%%Name%%%) *Single%%%Name%%%Response {
	return &Single%%%Name%%%Response{
		ID:   %%%Name.Lowercase%%%.ID,
		Name: %%%Name.Lowercase%%%.Name,
	}
}
`
