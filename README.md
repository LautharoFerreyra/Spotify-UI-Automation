# Spotify Automation Project

This is a project for automating the Spotify UI using the Cypress framework.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Ensure you have Node.js and npm installed on your machine. You can download them from [Node.js](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:
    ```bash
    git https://github.com/LautharoFerreyra/Spotify-UI-Automation.git
    ```

2. Navigate to the project directory:
    ```bash
    cd spotify-automation
    ```

3. Install the project dependencies:
    ```bash
    npm install
    ```

4. Install Cypress:
    ```bash
    npm install cypress
    ```

5. (Optional) Install additional Cypress plugins, for example, to enable test filtering:
    ```bash
    npm i -D @cypress/grep
    ```

### Project Structure

- The page objects are stored in: `/cypress/support/pageObjects`
- The test files are located in: `/cypress/integration`

### Running Tests

To execute the tests, you can use the following commands:

- Run all tests in headless mode:
    ```bash
    npx cypress run
    ```

- Open the Cypress Test Runner to run tests interactively:
    ```bash
    npx cypress open
    ```

## Writing Tests

When writing tests, use the page objects defined in `/cypress/support/pageObjects` to interact with the Spotify UI. This helps keep the tests maintainable and readable.

Additional Resources
Cypress Documentation
Spotify API Documentation """
