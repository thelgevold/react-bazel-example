Steps to run the sample:

This sample builds a huge React app (8000+ files) with a small Node backend. The idea is to leverage a remote build cache to avoid rebuilds of the large project once it's built once.

1) Install docker

2) Terminal 1: npm run start-remote-cache

3) Terminal 2: npm run start-client

4) Launch the app from http://localhost:9999

Blog post: https://www.syntaxsuccess.com/viewarticle/scalable-react-build-with-bazel

Note: There is currently no prod bundling step in this branch. It could be added through a Rollup or Weback rule though.
