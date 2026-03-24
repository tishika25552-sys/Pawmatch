# 🐾 PawMatch - Dog Adoption Directory

## 🔰 Project Overview
PawMatch is a dynamic, front-end web application that serves as a directory for dog breeds, simulating an adoption and breed discovery platform. The platform allows users to browse, search, and sort through a massive list of shelter dogs. This project is built to demonstrate core web development concepts, including REST API integration, responsive UI design, and advanced DOM manipulation using JavaScript.

## 🔌 API Reference
**The Dog API:** [https://api.thedogapi.com/v1/breeds](https://api.thedogapi.com/v1/breeds)
(Used to fetch real-time JSON data containing global dog breeds, lifespans, weights, and temperaments).

## 💡 Planned Features
To fulfill the project requirements of manipulating data strictly using JavaScript Array Higher-Order Functions (HOFs), the following interactive features will be implemented:

* **Dynamic Grid Rendering:** Fetch and display breed cards dynamically using `.map()`.
* **Breed Search:** A real-time search bar allowing users to find specific breeds by keyword, combining `.filter()` and `.includes()`.
* **Alphabetical & Weight Sorting:** A dropdown mechanism to order the breed directory alphabetically or by size utilizing `.sort()`.
* **Trait Filtering:** Isolate dogs based on temperaments (e.g., "Playful" or "Stubborn") using `.filter()`.

## 🖼️ UI Concept Preview
The UI will feature responsive, modern cards displaying high-quality images and breed stats. 

<div align="center">
  <img src="https://images.dog.ceo/breeds/retriever-golden/n02099601_100.jpg" alt="Golden Retriever" width="300"/>
  <img src="https://images.dog.ceo/breeds/pug/n02110958_13005.jpg" alt="Pug" width="300"/>
</div>

## 🛠️ Technologies Used
* **HTML5:** Semantic structure.
* **CSS3:** Grid/Flexbox layouts and mobile-first responsive design.
* **Vanilla JavaScript:** Fetch API logic and DOM manipulation.

## 🚀 How to Run
Simply clone or download this repository and open the `index.html` file in any standard web browser (or use VS Code Live Server). No backend installation, Node modules, or build steps are required.

---
*Developed for the API Integration & UI Development Web App Project.*
