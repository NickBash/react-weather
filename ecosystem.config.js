module.exports = {
	apps : [{
		name: 'weather',
		script: "./server.js",
		args: "start",
		watch: true,
		ignore_watch : ["node_modules"],
		env: {
			"PORT": 2980,
			"NODE_ENV": "development"
		},
		env_production: {
			"PORT": 2980,
			"NODE_ENV": "production",
		}
	}]
}
