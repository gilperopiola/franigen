export const Template = `func (r %%%Name%%%Repository) Delete(ctx context.Context, %%%Name.Lowercase%%%ID uint) error {
	return r.DB.Delete(&entities.%%%Name%%%{}, %%%Name.Lowercase%%%ID).Error
}
`
