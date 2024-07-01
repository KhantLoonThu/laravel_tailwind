/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#5b3cc4',
                success: 'rgb(23, 201, 100)',
                danger: 'rgb(242, 19, 93)',
                warning: 'rgb(255, 130, 0)',
                dark: 'rgb(36, 33, 69)',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                openSans: ['Open Sans', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
            },
            fontSize: {
                'heading-1': '2.25rem', // Equivalent to 36px
                'heading-2': '1.875rem', // Equivalent to 30px
                'heading-3': '1.5rem', // Equivalent to 24px
                'heading-4': '1.25rem', // Equivalent to 20px
                'heading-5': '1.125rem', // Equivalent to 18px
            },
            screens: {
                'xs': '320px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
            },
        },
    },
    plugins: [],
}
