# Hermes-FrontEnd

This is the frontend of **Hermes**, an application built with **React + TypeScript** and **Vite**. Currently, the project has been initialized and **Bootstrap 5** is configured for styling.

## 🚀 Technologies Used
This project uses the following technologies:
- ⚛️ **React** with **Vite**  
- 📜 **TypeScript**  
- 🎨 **Bootstrap 5** for styling  
- 📦 **React Bootstrap**

## 🛠️ Required Commands
1️⃣ Clone the repository  
```sh
git clone https://github.com/your-username/Hermes-FrontEnd.git
cd Hermes-FrontEnd
```
2️⃣ Install dependencies
```sh
npm install
```
3️⃣ Run the development server
```sh
npm run dev
```
## 🛠️ Build and Run the Docker Container

1️⃣ Build the image:
```sh
docker build -t hermes-frontend-image .
```

2️⃣ Run the container:
```sh
docker run -p 3000:80 --name hermes-frontend-container hermes-frontend-image
```
