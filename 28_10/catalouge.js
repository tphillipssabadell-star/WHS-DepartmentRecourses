		new DataTable('#bookTable', {
			ajax: 'https://script.google.com/macros/s/AKfycbw5pHnziHrynThfJxdCgWANJtUJv3AzJEcOOotgY8Qx-RTlN1LQ4PG7RH4cBgw8_zKu/exec',
			columns: [
				{ data: 'Author' },
				{ data: 'Title' },
				{ data: 'No of copies' },
				{ data: 'Current location' },
				{ data: 'Year 7-8' },
				{ data: 'Year 9-10' },
				{ data: 'Year 11' },
				{ data: 'Year 12' },
				{ data: 'Year 13' },
				{ data: 'Teaching Resources',
					render: function (data) {
						if (!data) return '';
						return '<a href="' + data + '" target="_blank" rel="noopener">Open</a>';
					}
				}
			]
		});