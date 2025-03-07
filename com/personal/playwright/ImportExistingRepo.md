## Importing existing repo in VS Code
**Note**: Ensure you have Git installed on your machine. You can download it from git-scm.com.

### 1. Clone the repo
- Open Visual Studio Code.
- Press `Ctrl+Shift+P` to open the Command Palette.
- Type `Git: Clone` and select it.
- When prompted, enter the repository URL: `<remote url>`.
- Choose a local directory to clone the repository into.

### 2. Authenticate and Open

If prompted, enter your Azure DevOps credentials. You might need to generate a Personal Access Token (PAT) from Azure DevOps and use it as your password.
Once the repository is cloned, Visual Studio Code will prompt you to open the cloned repository. Click `Open`.

### 3. Open Test Explorer and Run tests

The Test Explorer should automatically discover the tests in your project. You can run all tests by clicking the play button next to the test suite or individual tests.

### 4. Running from Command Palatte

Press `Ctrl+Shift+P` to open the Command Palette.
Type `Run Test Task` and select it to run all tests in your project.


### 5. Run Tests from the Terminal

- Open the integrated terminal in VS Code (`Ctrl+``).
- Navigate to the root directory of your project.
- Run the appropriate command for your testing framework. For example:
  - Jest: `npm test`
  - Pytest: `pytest`
  - JUnit: `/gradlew test` (for Gradle) or `mvn test` (for Maven)
