<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>Doctor Booking App</h1>
  <p>A web application built with React, Express, and MongoDB for booking doctor appointments. The website allows users to browse available doctors, book appointments, view their schedule, and manage their health details. Doctors can manage their availability and update their profiles.</p>

  <h2>Features</h2>
  <ul>
    <li><strong>User Features:</strong>
      <ul>
        <li>Browse available doctors by location, hospital and department.</li>
        <li>View doctor profiles with qualifications and availability.</li>
        <li>Book an appointment with a doctor.</li>
        <li>View and manage your booked appointments.</li>
      </ul>
    </li>
    <li><strong>Doctor Features:</strong>
      <ul>
        <li>Create and manage doctor profiles.</li>
        <li>Set available time slots.</li>
      </ul>
    </li>
    <li><strong>Admin Features:</strong>
      <ul>
        <li>Manage doctors and users.</li>
      </ul>
    </li>
  </ul>

  <h2>Tech Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> React.js</li>
    <li><strong>Backend:</strong> Node.js with Express</li>
    <li><strong>Database:</strong> MongoDB</li>
    <li><strong>Authentication:</strong> JWT (JSON Web Tokens) for secure user and doctor logins</li>
  </ul>

  <h2>Installation</h2>
  <p>To run this project locally, follow the steps below:</p>

  <h3>Prerequisites</h3>
  <p>Make sure you have the following installed:</p>
  <ul>
    <li>Node.js (LTS version)</li>
    <li>npm or yarn (for managing packages)</li>
    <li>MongoDB running locally or a cloud instance (MongoDB Atlas)</li>
  </ul>

  <h3>Backend Setup (Express + MongoDB)</h3>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/yadu247/doctor-booking-app.git
cd doctor-booking-app
cd server</code></pre>
    </li>
    <li>Install backend dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>Create a <strong>.env</strong> file in the <strong>server</strong> directory with the following keys:
      <pre><code>SECRET_KEY</code></pre><pre><code>RESET_PASSWORD_SECRET_KEY</code></pre><pre><code>PORT</code></pre><pre><code>MONGO_URI</code></pre>
    </li>
    <li>Start the backend server:
      <pre><code>npm run dev</code></pre>
      The backend should be running on <strong>http://localhost:8888</strong>.
    </li>
  </ol>

  <h3>Frontend Setup (React)</h3>
  <ol>
    <li>From the root project directory, go to the <strong>client</strong> folder:
      <pre><code>cd client</code></pre>
    </li>
    <li>Install frontend dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>Start the frontend development server:
      <pre><code>npm run dev</code></pre>
      The frontend should be available at <strong>http://localhost:5173</strong>.
    </li>
  </ol>

  <h3>MongoDB Atlas Setup</h3>
<ul>
  <li>
    If you are using <strong>MongoDB Atlas</strong>, ensure you have set up a cluster and created a database user with proper permissions.
  </li>
  <li>
    Obtain your connection string from the Atlas dashboard. It will look something like this: 
    <code>mongodb+srv://<username>:<password>@cluster0.abcdef.mongodb.net/<dbname>?retryWrites=true&w=majority</code>.
  </li>
  <li>
    Replace <code>&lt;username&gt;</code>, <code>&lt;password&gt;</code>, and <code>&lt;dbname&gt;</code> with your credentials and database name.
  </li>
  <li>
    Add the connection string to your <code>.env</code> file as:
    <pre><code>MONGO_URI=mongodb+srv://<username>:<password>@cluster0.abcdef.mongodb.net/<dbname>?retryWrites=true&w=majority</code></pre>
  </li>
  <li>
    Ensure your application connects to the database using this URI, and whitelist your IP address or allow access from anywhere in the Atlas settings.
  </li>
</ul>


  <h3>Optional: Seed the Database</h3>
  <p>For testing purposes, you can seed the database with sample admin, doctors, users, and appointments.</p>
  
  <h2>Contributing</h2>
  <p>Contributions are welcome! Please follow these steps to contribute:</p>
  <ol>
    <li>Fork the repository.</li>
    <li>Create a new branch (<code>git checkout -b feature-name</code>).</li>
    <li>Make your changes.</li>
    <li>Commit your changes (<code>git commit -am 'Add feature'</code>).</li>
    <li>Push to the branch (<code>git push origin feature-name</code>).</li>
    <li>Create a new Pull Request.</li>
  </ol>

  <h2>License</h2>
  <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

  <h2>Acknowledgments</h2>
  <ul>
    <li>React - for building the frontend UI.</li>
    <li>Express - for backend API development.</li>
    <li>MongoDB - for database management.</li>
    <li>JWT - for secure authentication.</li>
    <li>Thanks to all contributors and open-source developers.</li>
  </ul>
</body>
</html>
