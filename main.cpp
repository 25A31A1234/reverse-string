#include <iostream>
#include <string>
using namespace std;

int main() {
    // Step 1: Declare a string variable to hold user input
    string original;

    // Step 2: Ask the user for input
    cout << "Enter a string: ";
    getline(cin, original);

    // Step 3: Display the original string
    cout << "Original string: " << original << endl;

    // Step 4: Create a new string to hold the reversed version
    string reversed = "";

    // Step 5: Loop through the original string from the last character to the first
    for (int i = original.length() - 1; i >= 0; i--) {
        reversed = reversed + original[i];
    }

    // Step 6: Display the reversed string
    cout << "Reversed string: " << reversed << endl;

    return 0;
}