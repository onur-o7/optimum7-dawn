import shopify from 'vite-plugin-shopify';

/** @type {import('vite').UserConfig} */
export default {
	plugins: [shopify({
		sourceCodeDir: "src",
		entrypointsDir: "src",
	})]
};

