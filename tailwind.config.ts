import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				bluePrimary: {
					100: '#e4f3ff',
					200: '#90d5ff',
					300: '#00b2eb',
					400: '#008ab7',
					500: '#006486',
					600: '#004158',
					700: '#00202e',
				},
				blueSecondary: {
					100: '#ccd9ff',
					200: '#8fb1ff',
					300: '#358aff',
					400: '#0066ca',
					500: '#00458c',
					600: '#002652',
					700: '#00102a',
				},
				greenPrimary: {
					100: '#8fffe1',
					200: '#00dbb6',
					300: '#00b092',
					400: '#00876f',
					500: '#00604e',
					600: '#003b30',
					700: '#001a14',
				},
				greenSecondary: {
					100: '#a1f1f7',
					200: '#6bcad1',
					300: '#54a1a7',
					400: '#3e7a7e',
					500: '#295558',
					600: '#163234',
					700: '#051314',
				},
				neutral: {
					100: '#f0f1f1',
					200: '#cacdcf',
					300: '#a2a6a9',
					400: '#7e8183',
					500: '#5b5d5f',
					600: '#3a3c3d',
					700: '#1c1d1e',
				},
				stroke: {
					500: '#E6E5E5'
				},
				gold: {
					500: '#9B8601'
				}


			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				Montserrat: ["Montserrat", 'serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
