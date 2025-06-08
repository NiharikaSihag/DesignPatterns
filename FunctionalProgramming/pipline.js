// name: 'c/cd'
// on:
// push:
// branch: 
// -main 
// jobs: 
// build-and-test:
// runs-on: 'ubuntu'
// steps: 
// -name: Install dependencies
// run: npm Install
// -name: Run tests 
// run: npm test 



// deploy: 
// needs: build-and-test
// runs-ons : 
// if: succes()
// steps: 
// -name: deploying to server 
// run: echo 'Deployin tp prod'