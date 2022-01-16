export default {
	name: 'layout',
	title: 'Layout',
	type: 'document',
	fields: [
		{
			name: 'icon',
			title: 'Icon Name',
			type: 'string'
		},
		{
			name: 'title',
			title: 'Title Name',
			type: 'string'
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true
			}
		},
		{
			name: 'isActive',
			title: 'Active / Passive',	
			type: 'boolean'
		  }
	]
};