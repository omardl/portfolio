/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		extend: {

			boxShadow: {
				'location-pulse': '0 0 1px 2px #dc2626',
			},

			colors: {
				'Angular-color': '#DE002D',
				'Angular-bg': '#FFEEF1',

				'Arduino-color': '#007582',
				'Arduino-bg': '#C5FFFD',

				'Docker-color': '#1D63ED',
				'Docker-bg': '#D7F4FF',
				
				'MongoDB-color': '#00461E',
				'MongoDB-bg': '#00ED64',

				'Mosquitto-color': '#3C5280',
				'Mosquitto-bg': '#FEF2E2',
				
				'NFC-color': '#193859',
				'NFC-bg': '#E5EEF9',

				'NodeJS-color': '#35592C',
				'NodeJS-bg': '#E7F4E4',
				
				'NodeRed-color': '#8F0000',
				'NodeRed-bg': '#FFDADA',
				
				'Python-color': '#655300',
				'Python-bg': '#FFFAC2',

				'SOFA-color': '#8C2D0E',
				'SOFA-bg': '#FCE7D8',

				'Solidity-color': '#3f3988',
				'Solidity-bg': '#e2e7fd',
				
				'SpringBoot-color': '#101B07',
				'SpringBoot-bg': '#6CB52D',

				'TensorFlow-color': '#271F00',
				'TensorFlow-bg': '#FF8C00',
			},

			keyframes: {
				pulsate: {
					'0%': {
						transform: 'scale(0.1, 0.1)',
						opacity: '0'
					},

					'50%': { 
						opacity: '1' 
					},
					
					'100%': {
						transform: 'scale(1.2, 1.2)',
						opacity: '0'
					},
				},

				backgroundShine: {
					from: {
						backgroundPosition: "0 0"
					},
					
					to: {
						backgroundPosition: "-200% 0"
					},
				},
			},

			rotate: {
				'35': '35deg',
			}
		},
	},
	plugins: [],
}

