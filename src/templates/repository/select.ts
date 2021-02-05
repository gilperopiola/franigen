export const Template = `func (r %%%Name%%%Repository) Select(ctx context.Context, query *contracts.Select%%%Name%%%sRequest) ([]*entities.%%%Name%%%, error) {
	%%%Name.Lowercase%%%s := []*entities.%%%Name%%%{}
	db := r.DB

	if len(query.ID) > 0 {
		db = db.Where("id IN (?)", query.ID)
	}

	if len(query.Name) > 0 {
		db = db.Where("name LIKE ?", "%"+query.Name+"%")
	}

	db = db.Limit(query.Limit).Offset(query.Offset)

	err := db.Find(&%%%Name.Lowercase%%%s).Error
	return %%%Name.Lowercase%%%s, err
}
`
