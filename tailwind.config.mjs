/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {

			boxShadow: {
				'location-pulse': '0 0 1px 2px',
				'grid': '5px 5px 10px rgb(25, 25, 25), -5px -5px 10px rgb(60, 60, 60)',
				'grid-mini': '2px 2px 5px rgb(25, 25, 25), -2px -2px 5px rgb(60, 60, 60)',
				'grid-hover': '0px 0px 5px rgb(191, 219, 254), 0px 0px 20px rgb(29, 78, 216)',
				'grid-hover-mini': '2px 2px 5px rgb(29, 78, 216), -2px -2px 5px rgb(29, 78, 216)',
				'moon-shadow': 'inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb'
			},

			colors: {
				'Angular-color': '#DE002D',
				'Angular-bg': '#FFEEF1',

				'Arduino-color': '#007582',
				'Arduino-bg': '#C5FFFD',

				'Docker-color': '#1D63ED',
				'Docker-bg': '#BFEDFF',
				
				'Jetpack-color': '#002B41',
				'Jetpack-bg': '#D2ECFC',

				'Jira-color': '#2178f1',
				'Jira-bg': '#d9e9ff',

				'Kotlin-color': '#691394',
				'Kotlin-bg': '#F3DEFC',

				'MongoDB-color': '#00461E',
				'MongoDB-bg': '#78EBA8',

				'Mosquitto-color': '#3C5280',
				'Mosquitto-bg': '#FEF2E2',
				
				'NFC-color': '#193859',
				'NFC-bg': '#A1CBFF',

				'NodeJS-color': '#35592C',
				'NodeJS-bg': '#E7F4E4',
				
				'NodeRed-color': '#8F0000',
				'NodeRed-bg': '#FFDADA',
				
				'Python-color': '#655300',
				'Python-bg': '#FFFAC2',

				'SOFA-color': '#8C2D0E',
				'SOFA-bg': '#FCE7D8',

				'Solidity-color': '#3F3988',
				'Solidity-bg': '#E2E7FD',
				
				'SpringBoot-color': '#101B07',
				'SpringBoot-bg': '#AFE87d',

				'TensorFlow-color': '#271F00',
				'TensorFlow-bg': '#FFD6A3',
			},

			height: {
				'1/10': '10%'
			},

			keyframes: {
				backgroundShine: {
					from: {
						backgroundPosition: "0 0"
					},
					
					to: {
						backgroundPosition: "-200% 0"
					},
				},

				pulsate: {
					'0%': {
						transform: 'scale(0.1, 0.1)',
						opacity: '0'
					},

					'50%': { 
						opacity: '1' 
					},
					
					'100%': {
						transform: 'scale(1.3, 1.3)',
						opacity: '0'
					},
				},

				tilt: {
					'0%': {
						transform: 'scale(1, 1)',
					},
					
					'100%': {
						transform: 'scale(1.3, 1.3)',
					},
				},

				typing: {
					'0%': {
						opacity: '0'
					},

					'50%': {
						opacity: '0.6'
					},

					'100%': {
						opacity: '0'
					}
				}
			},

			rotate: {
				'35': '35deg',
				'135': '135deg'
			},

			width: {
				'17/20': '85%',
				'19/20': '95%'
			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}

