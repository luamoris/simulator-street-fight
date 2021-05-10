// ============================================================================ BABEL CONFIG

// ================================ PRESETS
const presets = [
	[
		'@babel/preset-env',
		{
			targets: {
				firefox: '60',
				chrome: '67',
			},
		},
	],
];

// ================================ PLUGINS
const plugins = [
	'@babel/plugin-proposal-class-properties',
];

// ============================================================================

const CONFIG = {
	presets,
	plugins,
};

// ============================================================================
module.exports = CONFIG;
