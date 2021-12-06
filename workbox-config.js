module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,ico,html,png,txt,css,svg,js,jpg}'
	],
	// ignoreURLParametersMatching: [
	// 	/^utm_/,
	// 	/^fbclid$/
	// ],
	swDest: 'build/sw.js',
	swSrc: 'src/sw-template.js',
	maximumFileSizeToCacheInBytes: 5000000
};