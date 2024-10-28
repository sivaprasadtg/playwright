## Playwright with JavaScript. (Run using PowerShell (as Administrator))
**Note**: When powershell is opened, it will load  `C:\WINDOWS\system32>`! DO NOT use  `system32` folder for creating and working on projects!

### 1.a) Install NVM exe

Playwright works with Node.js, so the first thing you need is to install it.
For windows the exe file can be downloaded from (`https://github.com/coreybutler/nvm-windows/tags`).

### 1.b) Check the Installation:

Open `Command Prompt` (not PowerShell) and type the following command to confirm that NVM is installed: 
```
nvm --version
```
If this give a proper version, that means installation of NVM is successful.

### 1.c) Install Node.js
After installing the nvm exe, run 
```
nvm install latest
```

If there is an error which says:
`nvm: command not found`
, it indicates that NVM (Node Version Manager) is either not installed properly or not added to your system's environment variables. In my case it was added to
the env variables but as reference and that did not work. Adding the path directly to user defined variables made it work.

Under `System variables`, find the Path variable and click Edit.
Ensure the following paths are included: `C:\Program Files\nvm` and `C:\Program Files\nodejs`

### 1.d) Install Node.js (the second attempt)
Run the command again to install Node.js.
```
nvm install latest
```

### 1.e) Set the version to use
Run the command to set the version installed to be used.
```
nvm use latest
```

### 1.f) Verify Node.js installation
After switching to the latest version, verify that Node.js is installed by running: 
```
node -v
```

### 2.a) Set Up the Project
Navigate to a common folder (eg. Users/Document etc) and create a repo for the playwright tests and activities.
Once Node.js is installed, create a new project folder and initialize a new Node.js project using npm.

```
mkdir playwright-demo
cd playwright-demo
npm init -y
```

The below error can pop up when trying to execute the step (`npm init -y`):
```
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system. For
more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ npm init -y
+ ~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

### 2.b) Check execution permission
Run the command  
```
Get-ExecutionPolicy
```
and check for the result. If it says:
`>>Restricted`

there is no access to run the scripts and so need to modify the permission by running:
```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

When the script execution is completed, the permission can be set back to original state by running:
```
Set-ExecutionPolicy Restricted -Scope CurrentUser
```

### 3. Install Playwright

Run the command to install playwright:
```
npm install playwright
```

### 4. Install chromium

Playwright requires browser binaries to work. You can download them by running the following command:
```
npx playwright install
```
[`npx playwright install chromium` (just to install chromium and not all browser binaries)]


### 5.a) Sample test
Now its time to start setting up a sample test (in JS) created in a new folder.
```
mkdir tests
cd tests
New-Item -ItemType File example.test.js
```

### 5.b) Editing the created test file
Once the test file is created, need to add a sample code to try out the set up works or not, by opening the file using notepad.
```
notepad example.test.js
```

**Sample code:**

`com/personal/playwright/learning/test`

The code will launches a new browser instance. Opens a new page (or tab) in the browser. Navigates to a URL. And then captures a screenshot.
When its all done, it closes the browser.

### 6. Run Test
Run the test using Node.js:
```
node example.test.js
```

