package db

// pageViews int

type DB struct {
	PageViews int
}

// a function that returns pageViews
func (d *DB) GetPageViews() int {
	return d.PageViews
}

// a function that increments PageViews
func (d *DB) IncrementPageViews() {
	d.PageViews++
}
