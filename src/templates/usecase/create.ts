export const Template = `type Create interface {
	Execute(ctx context.Context, req contracts.Create%%%Name%%%Request) (*contracts.Create%%%Name%%%Response, error)
}

type CreateImpl struct {
	%%%Name%%% providers.%%%Name%%%

	Logger *zap.Logger
}

func (uc CreateImpl) Execute(ctx context.Context, req contracts.Create%%%Name%%%Request) (*contracts.Create%%%Name%%%Response, error) {
	%%%Name.Lowercase%%%, err := uc.%%%Name%%%.Create(ctx, req.New%%%Name%%%())
	if err != nil {
		uc.Logger.Error(errors.ErrCreating%%%Name%%%.Error(), zap.Error(err))
		return nil, errors.ErrCreating%%%Name%%%
	}

	return contracts.NewCreateResponse(%%%Name.Lowercase%%%), nil
}
`
