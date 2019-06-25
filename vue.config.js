const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");

module.exports = {
	// outputDir: "docs",
	publicPath: process.env.NODE_ENV === "production" ? "/vant-demo/" : "/",
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					autoprefixer(),
					pxtorem({
						rootValue: 75,
						propList: ["*"],
					}),
				],
			},
			less: {
				modifyVars: {
					red: "#e5017d",
					blue: "#e5017d",
					orange: "#f08d49",
					"text-color": "#111",
				},
			},
		},
	},
};
