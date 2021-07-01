const tracks = [
	{
		tasks: [
			{
				title: 'The Product',
				tracks: [
					{
						tasks: [
							{
								title: 'Color System',
								length: 15,
								tracks: [
									{ tasks: [ { title: 'Pixelgrade Care v1.7.15', completed: 1, }, ] },
									{ tasks: [ { title: 'Rosa 2 v1.12.0', completed: 0.8, }, ] },
									{ tasks: [ { title: 'Nova Blocks v1.12.0', completed: 0.8, }, ] },
									{ tasks: [ { title: 'Style Manager v2.0.0', completed: 0.9, } ] },
								]
							}, {
								title: 'Create a Universal Theme',
								length: 5,
								tracks: [
									{
										tasks: [ { description: 'Set a name for the universal theme (eg. Pixelgrade LT Theme)' } ]
									},
									{
										tasks: [ { description: 'Set a name for theme designs/variations (eg. Rosa2 or Rosa LT)' } ]
									},
									{
										tasks: [ { description: 'Adjust the licensing system to change the availability of the Starter Content based on the license purchased (eg. for Rosa LT license, provide only the Rosa LT starter content)' } ]
									},
								]
							}, {
								title: 'Create Starter Content for Other Niches',
								completed: 0.2,
								length: 10,
								tracks: [
									{
										tasks: [
											{
												title: 'Magazine (Felt LT)',
												tracks: [
													{ tasks: [ { title: 'Posts Slideshow block', completed: 1 } ] },
													{ tasks: [ { title: 'Posts Carousel block', completed: 1 } ] },
													{ tasks: [ { title: 'Sidecar block', completed: 1 } ] },
													{ tasks: [ { title: 'Starter content', completed: 0.1 } ] },
												]
											}
										]
									},
									{ tasks: [ { title: 'Food Blog (Julia)' } ] },
									{ tasks: [ { title: 'Restaurant Alt (Osteria)' } ] },
									{ tasks: [ { title: 'Travel Blog (Vasco)' } ] },
								]
							}, {
								title: 'Release Nova Blocks 2.0',
								completed: 0.2,
								length: 10,
								tracks: [
									{
										tasks: [
											{
												description: 'Determine a strategy for an universal block (eg. Supernova) to handle blocks with overlapping features',
												completed: 0.7
											}
										]
									},
									{
										tasks: [
											{
												description: 'Migrate old blocks to the new blocks system (1.13.0)',
												tracks: [
													{ tasks: [ { title: 'Media Card', completed: 0.8 } ] },
													{ tasks: [ { title: 'Hero', completed: 0.8 } ] },
													{ tasks: [ { title: 'Slideshow', completed: 0.8 } ] },
													{ tasks: [ { title: 'Posts Collection', completed: 0.7 } ] },
													{ tasks: [ { title: 'Cards Collection', completed: 0.7 } ] },
												]
											}, {
												description: 'If needed, remove old blocks from codebase in Nova Blocks 2.0'
											}
										]
									},
									{
										tasks: [
											{
												description: 'Integrate components to core blocks (eg. Color Signal component to Group block)',
												completed: 0.3
											}
										]
									},
									{ tasks: [ { description: 'Extend new blocks for other use-cases (eg. Projects Collection)' } ] },
								]
							}
						],
					}
				],
			}
		]
	},
	{
		tasks: [
			{
				title: 'The Platform',
				description: 'You don’t have to download software, pay for hosting, purchase and configure extra plugin licenses, or manage a web server. You can instead focus on creating the content, and we will handle the rest!',
				tracks: [
					{
						tasks: [
							{ title: 'Research', length: 3, completed: 1 },
							{ title: 'Planning', length: 3, completed: 1 },
							{
								title: 'Components',
								length: 15,
								tracks: [
									{
										tasks: [
											{
												title: 'PixelgradeLT Records',
												completed: 0.7,
												description: 'Manage LT packages and LT parts for use in site compositions.',
											},
										]
									},
									{
										tasks: [
											{
												title: 'PixelgradeLT Retailer',
												completed: 0.6,
												description: 'Manage LT solutions tied to WooCommerce products for purchase. A suite of solutions make up the basis for a site composition.',
											},
										]
									},
									{
										tasks: [
											{
												title: 'PixelgradeLT Deck (WP Cloud Deploy)',
												completed: 0.2,
												description: 'Manage the web servers and the WordPress installations.',
											},
										]
									},
									{
										tasks: [
											{
												title: 'PixelgradeLT Conductor',
												completed: 0.1,
												description: 'A WordPress plugin installed on each LT site to handle the integration with the rest of the ecosystem.',
											},
										]
									},
									{
										tasks: [
											{
												title: 'Skeleton plugin for PixelgradeLT Parts',
												completed: 0.1,
												description: 'A starter WordPress plugin for building the custom logic attached to each LT part.',
											},
										]
									},
								]
							},
							{
								title: 'Minimum Viable Product',
								length: 10,
								tracks: [
									{
										tasks: [
											{
												title: 'Create PixelgradeLT Parts for our current offering',
												completed: 0.1,
												description: 'Parts for the solutions we currently target (pieces of a restaurant website, pieces of a blog).',
											},
										]
									},
									{
										tasks: [
											{
												title: 'Instantiate and integrate PixelgradeLT Records, Retailer, and Deck',
												completed: 0.1,
												description: 'Create the needed WordPress instances needed to run each entity and ensure their functionality together.',
											},
										]
									},
								]
							},
							{ title: 'Beta Testing', length: 5, },
							{ title: 'Migrate Existing Websites', length: 7, },
						]
					}
				]
			}
		]
	}
];

export default tracks;