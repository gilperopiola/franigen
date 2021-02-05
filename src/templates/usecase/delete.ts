export const Template = `type Delete interface {
	Execute(ctx context.Context, %%%Name.Lowercase%%%ID uint) error
}

type DeleteImpl struct {
	%%%Name%%% providers.%%%Name%%%

	Logger *zap.Logger
}

func (uc DeleteImpl) Execute(ctx context.Context, %%%Name.Lowercase%%%ID uint) error {
	err := uc.%%%Name%%%.Delete(ctx, %%%Name.Lowercase%%%ID)
	if err != nil {
		uc.Logger.Error(errors.ErrDeleting%%%Name%%%.Error(), zap.Error(err))
		return errors.ErrDeleting%%%Name%%%
	}

	return nil
}
`
