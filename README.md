😂 Random Joke Generator

A fun and interactive Joke Generator Web App that fetches random jokes from the internet using an open API.
Built with HTML, CSS (Flexbox), and JavaScript (Fetch API) — perfect for beginners learning web development.

🎯 Project Overview

This web app fetches jokes from the Official Joke API and displays them dynamically.

When you click "Get Joke", it fetches a new joke setup.

When you click "Punchline", it reveals the punchline for that joke.

It’s a simple yet powerful example of working with asynchronous JavaScript, API fetching, and dynamic DOM manipulation.

🛠️ Tech Stack
Technology	Purpose
HTML5	Structure of the web page
CSS3 (Flexbox)	Styling, layout, and alignment
JavaScript (ES6)	Logic, API calls, and interactivity
Official Joke API	Source of random jokes
📂 Folder Structure
📦 Random-Joke-Generator  
 ┣ 📜 index.html         # Main HTML file  
 ┣ 📜 style.css          # CSS file for styling (Flexbox + colors)  
 ┣ 📜 script.js          # JavaScript logic for fetching jokes  
 ┗ 📜 README.md          # Project documentation  

🚀 How It Works

The "Get Joke" button triggers a fetch request:

const api = "https://official-joke-api.appspot.com/random_joke";
let res = await fetch(api);
let data = await res.json();


The setup (question part) of the joke appears inside:

<p id="setup">Your Joke will appear here...</p>


Clicking "Punchline" reveals the joke’s punchline below the setup.

🖼️ UI Overview
🧱 Layout Design

Centered vertically and horizontally using Flexbox

Uses aqua and cream color themes for a clean, modern look

Buttons include hover effects for better interactivity

💡 Example

Before clicking:

“Your Joke will appear here…”

After clicking “Get Joke”

🧠 Setup: Why don't scientists trust atoms?

After clicking “Punchline”

😂 Punchline: Because they make up everything!

🖥️ Screenshot


( image.png )

🌐 Live Demo

🚀 Try it here: https://akashh-21.github.io/random-joke-generator

(Replace this link if hosted elsewhere — e.g., Netlify or Vercel)

💻 How to Run the Project

Clone the repository

git clone https://github.com/akashh-21/random-joke-generator.git


Navigate to the project directory

cd random-joke-generator


Open index.html in your browser — and enjoy random jokes instantly!

🎨 Features

✅ Fetches real jokes using a live API
✅ Responsive layout with Flexbox
✅ Interactive buttons with hover effects
✅ Fun, minimal, and modern UI
✅ Great for learning API integration and DOM manipulation

🤝 Contributing

Want to enhance the UI or add new joke categories?
Feel free to fork this project and submit a pull request — contributions are always welcome!

📜 License

This project is licensed under the MIT License.
You’re free to use, modify, and distribute it with attribution.

👨‍💻 Author

Developed by [Kanuganti Aakash]
Made with ❤️ using HTML, CSS, and JavaScript.