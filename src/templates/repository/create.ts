export const Template = `func (r %%%Name%%%Repository) Create(ctx context.Context, %%%Name.Lowercase%%% *entities.%%%Name%%%) (*entities.%%%Name%%%, error) {
	err := r.DB.Create(&%%%Name.Lowercase%%%).Error
	return %%%Name.Lowercase%%%, err
}
`
