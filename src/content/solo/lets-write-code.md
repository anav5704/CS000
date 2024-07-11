---
title: Let's Write Code
id: 6
---

# Let's Write Code

Now that we have GitHub ready and Git installed, we can start writing code. We will make a simple C++ program that calculates the sum of two numbers.

# Create Project

Inside the `code` directory we made a few chapters ago, we will create a new directory called `CS000`. This will hold our `sum.cpp` file.

```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 5;
    int b = 10;

    int sum = a + b;

    cout << "The sum is: " << sum << endl;
}
```

# Compile Code

If you are using Dev C++, then you can compile and run the code by clicking the green arrow button in the top right corner of the window. If you are using Visual Studio Code, then you can use G++ to compile the project.

```bash
g++ sum.cpp -o sum
```

After compiling, you will notice that a new `.exe` file was created. This is the file you can click to run the program. Your Folder structure should look like this:

```ts
code
├── CS000
│   ├── sum.cpp
│   └── sum.exe
```
