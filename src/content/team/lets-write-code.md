---
title: Let's Write Code
id: 7
---

# Let's Write Code

This chapter is a continuation of the forking and cloning process. We are still assuming you are a `contributor` of the assignment repo. Say your role was to take in the user input and store it into a variable.

# Make Changes

Open up the cloned repo on your text editor and amend the code to match the requirements of the assignment:

```cpp
 #include <iostream>
using namespace std;

int main() {
    // declare variable
    int choice;

    cout << "CS000 Assignment!" << endl;

    cout << "What would you like to do?" << endl;

    cout << "1. Star the Repo" << endl;
    cout << "2. Contribute to the Repo" << endl;

    // take in user input
    cin >> choice;

    return 0;
}
```

That's your part of the assignment done. Open your terminal and navigate to the cloned repo. Then push your code with a clean commit message.
