/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            'sm': {'min': '320px', 'max': '479px'},
            'md': {'min': '480px', 'max': '767px'},
            'lg': {'min': '768px', 'max': '1023px'},
            'mxl': {'min': '1024px', 'max': '1437px'},
            'xl': {'min': '1438px', 'max': '1535px'},
            '2xl': {'min': '1536px'},
        },
        extend: {
            animation: {
                scrollMove: 'scrollMove 0.5s ease-in-out',
            },
            keyframes: {
                scrollMove: {
                    '0%': {
                        transform: 'translateY(50%)',
                        opacity: 0
                    },
                    '100%': {
                        transform: 'translateY(0%)',
                        opacity: 1
                    },
                }
            }
        },
    },
    plugins
:
[],
}
