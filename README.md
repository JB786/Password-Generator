# Password-Generator
This is a random **Password Generator** coded entirely in *HTML*, *CSS* &amp; *JavaScript*.

## Features
This Password Generator allows users to Generate 4 types of Passwords - 
- Weak Passwords
- Strong Passwords
- Super Strong Passwords
- Funny Passwords

By default, It is set to generate super-strong passwords.

## How to change the default?
1. Go to the "script.js" file and find a line of code shown below-
```   
 password.value = generate.generateSuperStrongPassword();
```
2. NOw change "generate.generateSuperStrongPassword()" to "generate.generateWeakPassword()", "generate.generateStrongPassword()" or "generate.generateFunnyPassword()".
   
3. All the above functions are pre-built in the "script.js" file.
