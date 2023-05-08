<h1>AI Image Generator</h1>

<hr>
<h4>Create Images using OpenAI's API</h4>
<hr>
<h2 align="center">Built With</h2>
<p align="center">
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="vite">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt ="css">
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="node">
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express">
</p>

<hr>

## Features

<ul>
    <li>Request Image Creation</li>
    <li>Uses OpenAI's API to make requests and fetch the image</li>
    <li>Download option for created images</li>
</ul>

<hr>

## Requirements
<ul>
    <li>A supported browser: Chrome, Safari, or Firefox</li>
    <li>Node.js installed</li>
    <li>npm installed</li>
    <li>OpenAI API key</li>
</ul>

<hr>

## Installation

1. Clone the repository
   ```sh
   git clone https://github.com/joselozano2003/Image-Generator.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a .env file
    ```sh
   touch .env
   ```
4. Insert the OpenAI key in the file
    ```sh
   OPENAI="<your key>"
   ```

## Running the app

1. Start the server
   ```sh
   node server.js
   ```
2. Start the app
   ```sh
   npm run dev
   ```
3. Open the page (port may vary)
    ```sh
   http://localhost:3000/
   ```
    or click 'O' in the vite terminal to open the page