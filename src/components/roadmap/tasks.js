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
								completed: 1,
								length: 6,
								tracks: [
									{ tasks: [ { title: 'Initial implementation', completed: 1, }, ] },
									{ tasks: [ { title: 'Color System Improvements', completed: 1, }, ] },
									{ tasks: [ { title: 'Customize Generated Palettes', completed: 0, }, ] },
								]
							}, {
								title: 'Extend core blocks',
								description: 'Integrate current components to core blocks',
								completed: 1,
								length: 4,
								tracks: [ {
									tasks: [ {
										title: 'Color Signal',
										completed: 1,
										tracks: [
											{ tasks: [ { title: 'List', completed: 1 } ] },
											{ tasks: [ { title: 'Group', completed: 1 } ] },
											{ tasks: [ { title: 'To Be Determined' } ] },
										]
									} ]
								}, {
									tasks: [ {
										title: 'Spacing',
										completed: 1,
										tracks: [
											{ tasks: [ { title: 'Group', completed: 1 } ] },
											{ tasks: [ { title: 'To Be Determined' } ] },
										]
									} ]
								} ]
							}, {
								title: 'Supernova Block',
								completed: 0.2,
								tracks: [
									{ tasks: [ { description: 'Determine a strategy for an universal block to handle blocks with overlapping features', completed: 0.7 } ] },
									{ tasks: [ { description: 'Create variations for Supernova that cover functionality of older blocks', completed: 0.7 } ] },
									{ tasks: [ { description: 'Create migration logic to convert older blocks to Supernova', completed: 0.9 } ] },
									{ tasks: [ { description: 'Create new blocks for other use-cases (eg. Projects Collection)', completed: 0.1 } ] },
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
													{ tasks: [ { title: 'Posts Slideshow block', completed: 0.9 } ] },
													{ tasks: [ { title: 'Posts Carousel block', completed: 0.9 } ] },
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
								title: 'Create a Universal Theme',
								length: 5,
								tracks: [
									{
										tasks: [ { title: 'Anima', description: 'Set a name for the universal theme', completed: 1 } ]
									},
									{
										tasks: [ { description: 'Set a name for theme designs/variations (eg. Rosa2 or Rosa LT)' } ]
									},
									{
										tasks: [ { description: 'Adjust the licensing system to change the availability of the Starter Content based on the license purchased (eg. for Rosa LT license, provide only the Rosa LT starter content)' } ]
									},
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
				title: 'The Platform - MVP',
				description: 'You don\'t have to download software, pay for hosting, purchase and configure extra plugin licenses, or manage a web server. You can instead focus on creating the content, and we will handle the rest!',
				tracks: [
					{
						tasks: [
							{
								title: 'Research',
								length: 5,
								tracks: [
									{
										tasks: [
											{
												title: 'Define the scope',
												completed: 1,
												description: 'Conclusion: Provide managed solutions for user\'s needs, including hosting.',
											}
										]
									},
									{
										tasks: [
											{
												title: 'Define the value proposition',
												completed: 1,
												description: 'Conclusion: Eliminate the need for end-users to take on responsibilities they are not well-equipped to handle: hosting, performance, security, UPDATES.',
											}
										]
									},
									{
										tasks: [
											{
												title: 'Analysis of competition',
												completed: 1,
												description: 'Conclusion: Not really anything like this out there, in the WordPress ecosystem.',
											}
										]
									},
									{
										tasks: [
											{
												title: 'Technical',
												completed: 1,
												description: 'Conclusion: Rely on the Composer package manager for delivery, WP Cloud Deploy for deployment, and Github for site backups.',
											}
										]
									},
								]
							},
							{
								title: 'Planning',
								length: 10,
								tracks: [
									{
										tasks: [
											{
												title: 'Define the lexicon',
												completed: 1,
												description: 'Conclusion: Composition → Solutions → Parts → Packages.',
											}
										]
									},
									{
										tasks: [
											{
												title: 'Define the main entities',
												completed: 1,
												description: 'Conclusion: PixelgradeLT Records, PixelgradeLT Retailer, PixelgradeLT Deck, PixelgradeLT Conductor.',
											}
										]
									},
									{
										tasks: [
											{
												title: 'Define the main data flows',
												completed: 1,
												description: 'Identify and structure the main data flows for coherence and reliability.',
											}
										]
									},
									{
										tasks: [
											{
												title: 'PixelgradeLT Records responsibilities and workflows',
												completed: 1,
												description: 'Identify and define data entities (LT Packages, LT Parts), their relations and interactions with the other entities.',
											}
										]
									},
									{
										tasks: [
											{
												title: 'PixelgradeLT Retailer responsibilities and workflows',
												completed: 1,
												description: 'Identify and define data entities (LT Solutions, LT Compositions), their relations and interactions with the other entities.',
											}
										]
									},
									{
										tasks: [
											{
												title: 'PixelgradeLT Deck responsibilities and workflows',
												completed: 1,
												description: 'Identify and define data entities (LT Sites), their relations and interactions with the other entities.',
											}
										]
									},
									{
										tasks: [
											{
												title: 'PixelgradeLT Conductor responsibilities and workflows',
												completed: 1,
												description: 'Setup a site\'s options and ensure the LT logic throughout the WP installation, from inside the WP installation.',
											}
										]
									},
									{
										tasks: [
											{
												title: 'PixelgradeLT Metronome responsibilities and workflows (minimal)',
												completed: 0.1,
												description: 'Monitor and keep the site\'s performance at the highest level, from inside the WP installation.',
											}
										]
									},
									{
										tasks: [
											{
												title: 'PixelgradeLT Security responsibilities and workflows (minimal)',
												completed: 0.1,
												description: 'Monitor and keep the site\'s security at the highest level, from inside the WP installation.',
											}
										]
									},
								]
							},
							{
								title: 'Components',
								length: 20,
								tracks: [
									{
										tasks: [
											{
												title: 'PixelgradeLT Records',
												completed: 1,
												description: 'Manage LT packages and LT parts for use in site compositions.',
												tracks: [
													{ tasks: [ { title: 'LT Packages', completed: 1 } ] },
													{ tasks: [ { title: 'LT Parts', completed: 1 } ] },
													{ tasks: [ { title: 'LT Retailer integration', completed: 1 } ] },
													{ tasks: [ { title: 'LT Conductor integration', completed: 1 } ] },
												]
											},
										]
									},
									{
										tasks: [
											{
												title: 'PixelgradeLT Retailer',
												description: 'Manage LT solutions tied to WooCommerce products for purchase. A suite of solutions make up the basis for a site composition.',
												tracks: [
													{ tasks: [ { title: 'LT Solutions', completed: 1 } ] },
													{ tasks: [ { title: 'LT Compositions', completed: 1 } ] },
													{ tasks: [ { title: 'WooCommerce integration', completed: 1 } ] },
													{ tasks: [ { title: 'User-facing sites and compositions management (minimal)', completed: 0.2 } ] },
												]
											},
										]
									},
									{
										tasks: [
											{
												title: 'PixelgradeLT Conductor',
												description: 'A WordPress plugin installed on each LT site to handle the integration with the rest of the ecosystem.',
												tracks: [
													{ tasks: [ { title: 'LT Records integration', completed: 1 } ] },
													{ tasks: [ { title: 'Manage the composition plugins and themes, from inside the WP installation.', completed: 1 } ] },
													{ tasks: [ { title: 'Define and enforce user permissions', completed: 1 } ] },
													{ tasks: [ { title: 'Define and enforce WP dashboard behaviors', completed: 1 } ] },
													{ tasks: [ { title: 'Github integration', completed: 1 } ] },
												]
											},
										]
									},
									{
										tasks: [
											{
												title: 'PixelgradeLT Deck (WP Cloud Deploy)',
												description: 'Manage the web servers and the WordPress installations.',
												tracks: [
													{ tasks: [ { title: 'WP Cloud Deploy installation and configuration', completed: 0.1 } ] },
													{ tasks: [ { title: 'Fine-tuning of WP servers setup', completed: 0.1 } ] },
													{ tasks: [ { title: 'Deployment scripts', completed: 0.1 } ] },
													{ tasks: [ { title: 'PixelgradeLT Deck integration plugin', completed: 0.1 } ] },
													{ tasks: [ { title: 'Github integration', completed: 0.1 } ] },
												]
											},
										]
									},
									{
										tasks: [
											{
												title: 'Skeleton plugin for PixelgradeLT Parts',
												completed: 1.0,
												description: 'A starter WordPress plugin for building the custom logic attached to each LT part.',
											},
										]
									},
									{
										tasks: [
											{
												title: 'PixelgradeLT WPSite Starter',
												completed: 1.0,
												description: 'A starter Git repo based on Roots Bedrock. Each new site will use this as a template for a new Git repo.',
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
							{ title: 'Beta Testing', length: 4, },
							{ title: 'Migrate Existing Websites', length: 7, },
						]
					}
				]
			},
		]
	},
	{
		tasks: [
			{
				title: 'The Platform - After MVP',
				description: 'Stuff that we should provide, but that are not critical for the MVP.',
				tracks: [
					{
						tasks: [
							{
								title: 'Research',
								length: 5,
							},
							{
								title: 'Planning',
								length: 10,
								tracks: [
									{
										tasks: [
											{
												title: 'PixelgradeLT Metronome responsibilities and workflows',
												completed: 0.1,
												description: 'Monitor and keep the site\'s performance at the highest level, from inside the WP installation.',
											}
										]
									},
									{
										tasks: [
											{
												title: 'PixelgradeLT Security responsibilities and workflows',
												completed: 0.1,
												description: 'Monitor and keep the site\'s security at the highest level, from inside the WP installation.',
											}
										]
									},
									{
										tasks: [
											{
												title: 'PixelgradeLT Announcer responsibilities and workflows',
												completed: 0.1,
												description: 'Take in internal LT messages and route them to the appropriate destination (the site user, LT User Support, LT Technical Support, Slack channels, etc.)',
											}
										]
									},
								]
							},
							{
								title: 'Components',
								length: 20,
								tracks: [
									{
										tasks: [
											{
												title: 'PixelgradeLT Records',
												completed: 0.1,
												description: 'Manage LT packages and LT parts for use in site compositions.',
												tracks: [
													// { tasks: [ { title: 'LT Packages', completed: 1 } ] },
												]
											},
										]
									},
									{
										tasks: [
											{
												title: 'PixelgradeLT Retailer',
												description: 'Manage LT solutions tied to WooCommerce products for purchase. A suite of solutions make up the basis for a site composition.',
												tracks: [
													{ tasks: [ { title: 'User-facing sites and compositions management', completed: 0.1 } ] },
													{ tasks: [ { title: 'User-facing custom purchasing flow', completed: 0.1 } ] },
												]
											},
										]
									},
									{
										tasks: [
											{
												title: 'PixelgradeLT Conductor',
												description: 'A WordPress plugin installed on each LT site to handle the integration with the rest of the ecosystem.',
												tracks: [
													// { tasks: [ { title: 'LT Records integration', completed: 1 } ] },
												]
											},
										]
									},
									{
										tasks: [
											{
												title: 'PixelgradeLT Deck (WP Cloud Deploy)',
												description: 'Manage the web servers and the WordPress installations.',
												tracks: [
													// { tasks: [ { title: 'WP Cloud Deploy installation and configuration', completed: 0.1 } ] },
												]
											},
										]
									},
								]
							},
						]
					}
				]
			}
		]
	}
];

export default tracks;
