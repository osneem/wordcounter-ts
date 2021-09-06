1. Pull project from https://github.com/osneem/wordcounter-ts.git
2. Open the terminal in the project root folder
3. Use the following commands to install ts-node & necessary dependencies.
npm install
npm install -g ts-node

3. To run the word frequency counter use the following command:
ts-node ./src/index.ts ./src/source.txt

(Please notice that './src/source.txt' is the path of a test file, which can be replaced with a path to your own desired text file!)

4. To run the Jest tests please use the following command:
npm t index.test.ts

(Please notice that after all of the tests have ran successfully
the terminal will encounter a error: '[Error: ENOENT: no such file or directory]'.
This is possibly caused by a false configuration of the testing framework,
but I ran out of ideas on how to solve it.)
