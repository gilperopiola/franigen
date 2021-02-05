export const Template = `func (r %%%Name%%%Repository) Update(ctx context.Context, %%%Name.Lowercase%%% *entities.%%%Name%%%) (*entities.%%%Name%%%, error) {
	err := r.DB.Save(&%%%Name.Lowercase%%%).Error
	return %%%Name.Lowercase%%%, err
}
`
