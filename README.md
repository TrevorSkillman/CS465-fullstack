# CS465-Fulltack

# Architecture
"Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA)."

* In the full-stack project, we created multiple types of frontend development methodologies. With Express HTML, we streamlined the backend operations and ensured seamless interactions between the backend and the front end of the Travlr website. It was good when the content needed to be dynamically generated. The server processes the templates with data and sends a fully-rendered HTML page to the client.  
* JavaScript is essential for creating interactive web pages. It was used to handle events and interact with the backend asynchronously. The Travlr site enabled dynamic behaviors and enhanced the user experience by making the application responsive to user actions without needing full-page reloads.
* The SPA interacts with the user by dynamically rewriting the current web page with new data from the server instead of loading an entire new page. This results in a smoother user experience and faster times in the page transitions. It's not the page that reloads but more of the content that gets updated on the page.
* Express HTML delivers fully formed pages from the server; SPA usually handles most of the rendering on the client-side, fetching data as needed and updating the view dynamically.
* JavaScript is a tool used in both SPA and Express HTML, but its role becomes more pronounced in SPAs where client-side rendering is the primary method.
* SPAs rely on frameworks or libraries such as React and more for efficient client-side rendering, whereas Express HTML relies more on the backend server and templating engines for rendering.

"Why did the backend use a NoSQL MongoDB database?"
* To me, it would be several reasons, one being the flexibility with which we quickly change the structure of our data.
* The scalability of MongoDB is made to scale out by spreading data across servers. Gives the Travlr website lots of room for growth in the site.
* The performance of MongoDB allows for fast writes and reads. MongoDB stores data in BSON format, a binary format that naturally fits the Travlr project by using JavaScript on the front and back end and ensuring consistent data throughout the application.

# Functionality
"How is JSON different from Javascript, and how does JSON tie together the frontend and backend development pieces?"

* Javascript is a programming language, and JSON is a way to encode data structures like lists and dictionaries for transmission between systems. JSON is commonly used to send data from the server to the client and vice versa because it can parse with Javascript quickly.

"Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits of reusable user interface (UI) components."

* During the project, one noticeable instance of refactoring was when we had to implement backend and frontend security. After adding authorization, I found some CRUD methods that needed to be fixed as expected. I had to refactor the methods to ensure they correctly interacted with the new authorization level we implemented. It involved revalidating user permissions before performing any CRUD operations and adjusting how the data was fetched to align with the user privileges. This was causing significant problems for me, but I was able to refactor to maintain the integrity of the application.
* Consistency - Consistency of the UI components ensured a consistent look and behavior across the application
* Efficiency - Reduces the need to rewrite code, leading to faster development.
* Maintainability - If a bug is found or a feature is needed, it can be done in one place, affecting all instances of that component.

# Testing
"Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application."

* Methods and Endpoints - For this project, we utilized methods such as GET (fetch the data), POST (add in new trips), PUT (to update existing trips), and DELETE (to remove a trip). These methods had specific endpoints such as "/api/trips' to fetch the existing list of trips or "api/trips/:tripId" to access a specific trip.
* Security - When we integrated user authentication and authorization from module 7. It became critical to ensure secure data transactions by implementing the middleware functions to verify the JWT Token and check if the user is authorized to perform any CRUD operations. Sensitive data was hashed and instilled communications set up over HTTPS encryption.
* Difficulties - I had some issues with authorization and ensuring the API tests ran with the correct authorization tokens. Variable data: I had some issues of forgetting or losing my place in a file to locate a particular variable and just getting lost in the files altogether while trying to figure out what calls I wanted to make where. 

# Reflection
"How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?"

* This course helped me bridge the gaps between theoretical knowledge and practical application. This course was the missing piece to help me fully understand programming an application and provide a better confidence level of my abilities to be used in a future workplace environment. The course has equipped me with the power to develop a web application's frontend and backend components. Working with MongoDB honed my skills in designing, implementing, and querying databases. Understanding the NoSQL expanded my confidence to place into what I call my "Spellbook." Implementing user login and role-based access was necessary, along with the intricacies of the JWT token management and hashing user data.
* Creating restful APIs and understanding different HTTP methods is a good foundation for my Fullstack web development knowledge. Testing the endpoints was the core of the project.
* The amount of skills I learned during this course has made me a more well-rounded and marketable candidate in the competitive field of web development. The Travlr project serves as a testament to my capabilities and the knowledge I have gained. 
