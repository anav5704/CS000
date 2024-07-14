---
title: Merge Conflicts
id: 11
---

# Merge Conflicts

Merge conflicts - the arch nemesis of developers. Encountering one of these and not knowing what they are or now to resolve them is a truly horrible experience. They occur when the same line of code has been changed by different developers. Git doesn't know which version of the code is the correct one, so it can't merge the changes. They commonly occur while merging pull requests and pulling from a remote repository.

# Conflict Example

Let's say you have a file called `app.cpp` that looks like this:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!" << endl;

    return 0;
}
```

And you have two developers working on this file, `Developer A` and `Developer B`. Both developers make changes to the file.

Developer A makes the following change:

```cpp
cout << "Hello World! I am Developer A" << endl;
```

Developer B makes the following change:

```cpp
cout << "Hello World! I am Developer B" << endl;
```

Now let's say you are Developer A working on the repo on your computer. Developer B is faster than you, so he already made the change and created a pull request. This pull request lso got merged into the main repo. If you try to pull the changes, you will get a merge conflict.

Your `app.cpp` file will look like this:

```cpp
#include <iostream>
using namespace std;

int main() {
<<<<<<< HEAD (Current Change)
    cout << "Hello World! I am Developer A" << endl;
=======
    cout << "Hello World! I am Developer B" << endl;
>>>>>>> main (Incoming Change)

    return 0;
}
```

Don't worry, it's not the end of the world, yet. Git will put guides around the conflicting code to help you resolve the conflict. The guides have 3 main parts:

The first part is what you did.

```cpp
<<<<<<< HEAD (Current Change)
    cout << "Hello World! I am Developer A" << endl;
```

The second part is the seperator between the two versions of the code.

```cpp
=======
```

The third part is what the other developer did.

```cpp
    cout << "Hello World! I am Developer B" << endl;
>>>>>>> main (Incoming Change)
```

# Resolving Conflicts

In order to resolve the conflict, you have to delete 2 things: delete the code you do not want to keep and the guides that Git put around the code. The guides I'm referring to are these:

```cpp
<<<<<<< HEAD (Current Change)

=======

>>>>>>> main (Incoming Change)
```

Suppose in this case, we want to keep developer B's code. Our resoled version of the code will look like this:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World! I am Developer B" << endl;

    return 0;
}
```

If you encountered the conflict while doing a git pull, then you can just open the file in your editor and resolve it in there. If you encountered the conflict while doing a pull request merge on GitHub, you will need to resolve the conflict in the GitHub UI.
