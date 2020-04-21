##For using the module "jsmp-infra-my-first-module" you have to:

- run "npm i jsmp-infra-my-first-module";
- make import arr, string methods from "jsmp-infra-my-first-module";

##Methods:

- arr - It takes array and other parameters. It will return new array with all parameters;
- string - It takes string and other string parameters. It will return new string with all parameters; 

##Examples:

```ruby
    import { arr, string } from 'jsmp-infra-my-first-module';
    
    console.log(arr([0, 1, 2, 3], 4, 5, 6)); // expect result is [0, 1, 2, 3, 4, 5, 6]
    console.log(string('Hello,', ' I', ' am', ' a string module!')); // expect result is "Hello, I am a string module!"
```

