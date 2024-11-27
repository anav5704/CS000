---
title: Project Setup
id: 5
---

# Project Setup

Now let's go through how you would go about using Git and GitHub when doing group assignments. Contents of this chapter will be applicable if you are the repo `owner`.

# Create a Repo

Creating repositories was explained in the CS000 Solo lesson. The only thing were doing differently this time is that the repo will be `private`. This is because sharing of coding during assignments can lead to penalties.

# Add Collaborators

Once the repo is created, go to the repo page and click on the `Settings` tab. Look for the `Collaborators` section under `Access` and add your group members as collaborators. I'm going to invite a friend of mine:

# Push Code

For testing purposes, let's push some code to the repo. Just a simple `assignment.cpp` file with the following content:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "CS000 Assignment!" << endl;

    cout << "What would you like to do?" << endl;

    cout << "1. Star the Repo" << endl;
    cout << "2. Contribute to the Repo" << endl;

    return 0;
}
```

Try to push this code on your own. Use your knowledge from the solo course and try to think of a clean commit message.
