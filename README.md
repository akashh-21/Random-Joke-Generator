# 😂 Random Joke Generator  

A fun and interactive **Joke Generator Web App** that fetches random jokes from the internet using an open API.  
Built using **HTML**, **CSS (Flexbox)**, and **JavaScript (Fetch API)** for beginners learning web development.  

---

## 🎯 Project Overview  

This web app fetches jokes from the **Official Joke API** and displays them dynamically.  
- When you click **"Get Joke"**, it fetches a new joke setup.  
- When you click **"Punchline"**, it reveals the punchline for that joke.  

It’s a simple yet powerful example of working with **asynchronous JavaScript**, **API fetching**, and **dynamic DOM manipulation**.

---

## 🛠️ Tech Stack  

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Structure of the web page |
| **CSS3 (Flexbox)** | Styling, layout, and alignment |
| **JavaScript (ES6)** | Logic, API calls, and interactivity |
| **Official Joke API** | Source of jokes |

---

## 📂 Folder Structure  

📦 Random-Joke-Generator
┣ 📜 index.html # Main HTML file
┣ 📜 style.css # CSS file for styling (Flexbox + colors)
┣ 📜 script.js # JavaScript logic for fetching jokes
┗ 📜 README.md # Project documentation

---
ScreenShot:
[image.png]
---
## 🚀 How It Works  

1. The **"Get Joke"** button calls the API  
   ```javascript
   const api = "https://official-joke-api.appspot.com/random_joke";
   let res = await fetch(api);
   let data = await res.json();
The setup (question part) of the joke appears inside:

html
Copy code
<p id="joke">Your Joke will appear here...</p>
When "Punchline" is clicked, it reveals the joke’s punchline below the setup.

🖼️ UI Overview
🧱 Layout Design
The page is centered both vertically and horizontally using Flexbox.

The main box uses aqua and cream colors for a clean, modern look.

Buttons include hover effects for better user interaction.

💡 Example
Before clicking:

"Your Joke will appear here..."

After clicking “Get Joke”

🧠 Setup: Why don't scientists trust atoms?

After clicking “Punchline”

😂 Punchline: Because they make up everything!

💻 How to Run the Project
Clone the repository:

bash
Copy code
git clone https://github.com/akashh_21/random-joke-generator.git
Navigate to the project directory:

bash
Copy code
cd random-joke-generator
Open index.html in your browser.
That’s it! Your joke generator will load instantly.

🎨 Features
✅ Fetches real jokes using a live API
✅ Responsive layout using Flexbox
✅ Interactive buttons with hover effects
✅ Fun and minimal UI design
✅ Great for learning API integration

📸 Preview
(Optional: Add a screenshot or screen recording of your webpage here)

🤝 Contributing
Feel free to fork this project, enhance the UI, or add more joke categories.
Pull requests are always welcome!

📜 License
This project is licensed under the MIT License.
You’re free to use, modify, and distribute it with attribution.

👨‍💻 Author
Developed by [Kanuganti Aakash]
Made with ❤️ using HTML, CSS, and JavaScript.