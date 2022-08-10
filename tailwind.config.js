/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                strongUp: 'strongUp 1.5s ease-in-out',
                skillUp: 'skillUp 1.5s ease-in-out',
            },
            keyframes: {
                skillUp: {
                    '0%': {
                        transform: 'translateX(-50%)',
                        opacity: 0
                    },
                    '50%': {
                        transform: 'translateX(0)',
                        opacity: 0.5
                    },
                    '75%': {
                        opacity: 0.75
                    },
                    '100%': {opacity: 1},
                },
                strongUp: {
                    '0%': {
                        transform: 'translateX(50%)',
                        opacity: 0
                    },
                    '50%': {
                        transform: 'translateX(0%)',
                        opacity: 0.5
                    },
                    '75%': {
                        opacity: 0.75
                    },
                    '100%': {opacity: 1},
                }
            }
        },
    },
    plugins: [],
}
