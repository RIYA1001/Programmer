<h1 align="center">Programmer - Technical Documentation</h1>



## 1.	Overview

The "Programmer" is a web application built with Vite.js, React, React Router for navigation, and styled using Tailwind CSS. This technical documentation outlines the steps to set up, configure, and use the platform.



## 2.	Prerequisites

Before running the "Programmer" platform, ensure you have the following installed:

-	Node.js (version 14.17.6 or higher)
-	npm (Node Package Manager) or Yarn for managing dependencies



## 3.	Installation

3.1	Clone the repository:

•	git clone https://github.com/RIYA1001/Programmer.git

3.2	Navigate to the project directory:

•	cd Programmer

3.3	Install dependencies using npm:

- npm install
- npm install react-router-dom@latest
- npm install @headlessui/react @heroicons/react
- npm install --save @fortawesome/fontawesome-free
- npm install -D tailwindcss postcss autoprefixer
- npm install date-fns
- npm i --save firebase




## 4.	Configuration

The "Programmer" does not require specific configuration. However, ensure that your development environment meets the prerequisites mentioned above.



## 5.	Usage

To run the application locally, use the following command:

- npm run dev

Or with Vite:

- npx vite

This will start the development server, and you can access the application in your browser at http://localhost:5173/



## 6.	Navigation

The application uses React Router for navigation. Below are the main routes:

                    <Route path='/' exact element={<Home />} />
                    <Route path='/chat' element={<Chat />} />
                    <Route path='/help' element={<Help />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/sign' element={<Sign />} />
                    <Route path='/games' element={<Games />} />
                    <Route path='/liveLectures' element={<LiveLectures />} />
                    <Route path='/notes' element={<Notes />} />
                    <Route path="/videos" element={<Videos />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/mcq" element={<Mcq />} />
                    <Route path="/guessing" element={<Guessing />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
               


## 7.	Styling

The platform is styled using Tailwind CSS. No additional setup is required for styling.



## 8.	Troubleshooting

If you encounter any errors related to missing dependencies or issues during installation, ensure that you have Node.js and npm installed. Also, make sure to run the installation commands mentioned in the "Installation" section.



## 9.	Support and Feedback

For any issues, bugs, or feedback, please create an issue on the GitHub repository.


---


<h3 align="center">Thank you for using the "Programmer" platform! Happy coding!</h3>
