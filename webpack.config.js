var webpack = require("webpack");

module.exports =  {
	entry : {
		bundle :  ['webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
            'webpack/hot/only-dev-server',
           "./assets/js/index"],
	},
	output : {
		filename : "bundle.js",
		publicPath : "http://localhost:8080/assets/"
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
	devtool : 'source-map',
	plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]	
}