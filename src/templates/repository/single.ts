export const Template = `func (r %%%Name%%%Repository) Single(ctx context.Context, %%%Name.Lowercase%%%ID uint) (*entities.%%%Name%%%, error) {
	var %%%Name.Lowercase%%% entities.%%%Name%%%
	err := r.DB.First(&%%%Name.Lowercase%%%, %%%Name.Lowercase%%%ID).Error
	return &%%%Name.Lowercase%%%, err
}
`
