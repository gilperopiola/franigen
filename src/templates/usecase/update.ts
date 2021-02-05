export const Template = `type Update interface {
	Execute(ctx context.Context, req contracts.Update%%%Name%%%Request) (*contracts.Update%%%Name%%%Response, error)
}

type UpdateImpl struct {
	%%%Name%%% providers.%%%Name%%%

	Logger *zap.Logger
}

func (uc UpdateImpl) Execute(ctx context.Context, req contracts.Update%%%Name%%%Request) (*contracts.Update%%%Name%%%Response, error) {
	%%%Name.Lowercase%%%, err := uc.%%%Name%%%.Update(ctx, req.New%%%Name%%%())
	if err != nil {
		uc.Logger.Error(errors.ErrUpdating%%%Name%%%.Error(), zap.Error(err))
		return nil, errors.ErrUpdating%%%Name%%%
	}

	return contracts.NewUpdateResponse(*%%%Name.Lowercase%%%), nil
}
`
