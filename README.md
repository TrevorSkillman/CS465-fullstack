# CS465-Fulltack

# Architecture
"Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA)."

* In the full-stack project, we created multiple types of front-end development methodologies. With Express HTML, we streamlined the backend operations and ensured seamless interactions between the backend and the front end of the Travlr website. It was good when the content needed to be dynamically generated. The server processes the templates with data and sends a fully-rendered HTML page to the client.  
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

* Javascript is a programming language, and JSON is a way to encode data structures like lists and dictionaries for transmission between systems. JSON is commonly used to send data from the server to the client and vice versa due to it being able to parse with Javascript easily.

"Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components."

* During the project, one noticeable instance of refactoring was when we had to implement backend and frontend security. After adding authorization, I found some of our CRUD methods weren't functioning as expected. I had to refactor the methods to ensure they correctly interacted with the new authorization level that we implemented, which involved revalidating user permissions before performing any of the CRUD operations and adjusting how the data was fetched to align with the user privileges. This was causing major problems for me, but I was able to refactor to maintain the integrity of the application.
* Consistency - Consistency of the UI components ensured a consistent look and behavior across the application
* Efficiency - Reduces the need to rewrite code, which will lead to faster development.
* Maintainability - If a bug is found or if a feature is needed, it can be done in one place, affecting all instances of that component.

#Testing

 
