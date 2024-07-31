/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      // Add custom scrollbar styles here if not using the plugin
      scrollbar: {
        width: '8px',
        height: '8px',
        track: '#f1f1f1',
        thumb: '#888',
        hover: {
          thumb: '#555',
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // Add this line if using the plugin
  ],
}

