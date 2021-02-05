export const Template = `type Single interface {
	Execute(ctx context.Context, %%%Name.Lowercase%%%ID uint) (*contracts.Single%%%Name%%%Response, error)
}

type SingleImpl struct {
	%%%Name%%% providers.%%%Name%%%

	Logger *zap.Logger
}

func (uc SingleImpl) Execute(ctx context.Context, %%%Name.Lowercase%%%ID uint) (*contracts.Single%%%Name%%%Response, error) {
	%%%Name.Lowercase%%%, err := uc.%%%Name%%%.Single(ctx, %%%Name.Lowercase%%%ID)
	if err != nil {
		uc.Logger.Error(errors.ErrGetting%%%Name%%%.Error(), zap.Error(err))
		return nil, errors.ErrGetting%%%Name%%%
	}

	return contracts.NewSingle%%%Name%%%Response(%%%Name.Lowercase%%%), nil
}
`
