var webpack = require("webpack");

module.exports =  {
	entry : {
		bundle :  ["./assets/js/index"],
	},
	output : {
		filename : "bundle.js",
		path : "dist"
	},
	module : {
		loaders : [
			{
				test: /.jsx?$/,
                loaders: ['react-hot','babel'],
                exclude: /node_modules/,
			}
		]
	},
	resolve: {
        extensions: ['', '.js', '.jsx']
    },
	devtool : 'source-map'	
}