export const Template = `type Select%%%Name%%%sRequest struct {
	ID   []uint %%%Backtick%%%form:"id"%%%Backtick%%%
	Name string %%%Backtick%%%form:"name"%%%Backtick%%%

	Limit  uint
	Offset uint
}

type Select%%%Name%%%sResponse struct {
	%%%Name%%%s []*entities.%%%Name%%% %%%Backtick%%%json:"%%%Name.Lowercase%%%s"%%%Backtick%%%
}

func NewSelect%%%Name%%%sResponse(%%%Name.Lowercase%%%s []*entities.%%%Name%%%) *Select%%%Name%%%sResponse {
	return &Select%%%Name%%%sResponse{%%%Name%%%s: %%%Name.Lowercase%%%s}
}
`
