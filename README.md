# Portfolio Website

## Description

This Flask application serves as the backend for my professional portfolio website. It leverages Flask's routing and templating capabilities to render the HTML, CSS, and JavaScript code (using Bootstrap for styling). Notably, the app includes a contact form functionality that sends emails upon form submission.

## Key Features

* Dynamic routing using Flask's <code>@app.route</code> decorator
* Templating with Flask's <code>render_template</code> function
* Form handling with Flask's <code>request</code> object
* Email sending integration with Flask-Mail
* User feedback with Flask's <code>flash</code> function

## Prerequisites

* Python 3.x (https://www.python.org/downloads/)
* Flask (https://flask.palletsprojects.com/)
* Flask-Mail (https://palletsprojects.com/contact/)
* A text editor or IDE (e.g., Visual Studio Code, PyCharm)

## Installation

1. Create a virtual environment to isolate project dependencies:
   
   ```python
   # Bash

   python -m venv venv
   source venv/bin/activate  # Windows: venv\Scripts\activate
   ```

3. Install the required packages:

   ```python
   # Bash

   pip install Flask Flask-Mail
   ```

## Configuration

Create a <code>config.py</code> file to store your email credentials:

   ```python
   # Python

   email = 'your_email@example.com'
   senha = 'your_password'
   ```

Replace <code>your_email@example.com</code> and <code>your_password</code> with your actual email credentials. Additionally, make sure to follow the security guidelines of your email domain. For example, Gmail provides a specific password for setting up specific applications. This will prevent your credentials from being exposed on the web.

## Running the Application

1. Save your Flask code (e.g., <code>app.py</code>) and <code>app.py</code> in the same directory.
2. Start the development server:

   ```python
   # Bash

   python app.py
   ```

3. Access your portfolio website in your web browser, typically at http://127.0.0.1:5000/ (localhost).

## Deployment

For production deployment, consider using a web hosting service like Heroku or PythonAnywhere that supports Flask applications. You'll need to configure the server and potentially adjust Flask settings for production environments. Refer to the documentation of your chosen hosting service for specific instructions.

## Additional Considerations

* **Error Handling**: Implement robust error handling to handle potential exceptions during form submission or email sending.
* **Security**: Securely store email credentials (possibly using environment variables) and consider using a reputable email sending service for enhanced security.
* **Scalability**: If you anticipate high traffic, plan for scaling your application (e.g., using a cloud-based solution).
* **Testing**: Write unit tests to ensure the application's functionality, especially the contact form and email sending logic.
