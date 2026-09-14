# My BMI Calculator Website

## My Story
Yesterday, I had an idea to make a website using **Python** to calculate BMI. I wrote the entire code in Python first. But then I realized that we cannot easily make a visual website using raw Python alone. 

Since I am currently in **Week 4 of Harvard's CS50P (Python)** and studied **Java until Class 12**, I understood the math logic, but I didn't know how to build a webpage interface. 

To fix this, I did the following:
* At first, I installed Streamlit to deploy it as a Python website, but later realized it is not that efficient to do it in Python. So, I translated my Python code of the core logic into JavaScript.
* After this translation, I had a plan of how my website should look in real life. I pointed it out to Gemini, and it generated the HTML code comprising the entire website. I edited it again and again until it finally became my own style. This part took me the maximum amount of time to do.
* I had the basic idea that GitHub lets us upload our code as open-source, but had no idea how to do it. So here again, I used Gemini's help to do it, legalized my code under an MIT License, made my link public, and finally uploaded it.

---

## What I Learned About How This Webpage Works
Since I don't know much about web backend development yet, here is my understanding of how these files run together right in the web browser:

* **index.html:** This file acts as the gift wrapper. The gift was the JavaScript code, but HTML helped me to wrap my gift (the code) the way I wanted to and add additional things like "How BMI calculation works," a "Health Guide and Action Plans" so that the user gets a basic idea of how to achieve or maintain a normal BMI to be fit and healthy, and lastly, "Frequently Asked Questions" so that users can get answers to common queries.
* **style.css:** This handles the visual presentation. I customized it to use a sleek dark layout with an electric neon green theme because I felt this color would stand out the most with black as a background.
* **script.js:** This is the calculation engine. When a user clicks the button, it reads the input text boxes, takes the user input of weight (in kg only) and height (in m only), and calculates the user's BMI (Body Mass Index) right then and there.

---

## My Tech Experience So Far
* **Languages I know a bit of:** Python (Currently in Week 4 of CS50P), Java (Studied until Class 12).
* **New tools I tried for this project:** HTML, JavaScript, and GitHub Pages hosting.
* **My note on CSS:** I do not know how to write CSS styling from scratch yet! However, the code in my `style.css` file makes up 42.2% of this project because it is what automatically paints the background pitch black and makes the borders look sleek and neon green.

---

## Legal & Medical Disclaimers
* This project is open-source under the **MIT License**.
* **Disclaimer:** This tool is for general educational use only. Always talk to a doctor before changing your diet or workouts.

