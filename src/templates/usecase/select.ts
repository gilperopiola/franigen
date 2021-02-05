export const Template = `type Select interface {
	Execute(ctx context.Context, req contracts.Select%%%Name%%%sRequest) (*contracts.Select%%%Name%%%sResponse, error)
}

type SelectImpl struct {
	%%%Name%%% providers.%%%Name%%%

	Logger *zap.Logger
}

func (uc SelectImpl) Execute(ctx context.Context, req contracts.Select%%%Name%%%sRequest) (*contracts.Select%%%Name%%%sResponse, error) {
	%%%Name.Lowercase%%%s, err := uc.%%%Name%%%.Select(ctx, &req)
	if err != nil {
		uc.Logger.Error(errors.ErrGetting%%%Name%%%s.Error(), zap.Error(err))
		return nil, errors.ErrGetting%%%Name%%%s
	}

	return contracts.NewSelect%%%Name%%%sResponse(%%%Name.Lowercase%%%s), nil
}
`
