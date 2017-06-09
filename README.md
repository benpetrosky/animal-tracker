## Planning

1. Configuration/dependencies
  * This should include ALL dependencies.
  * It should also include WHERE they are defined and used in the project
  * It could include a short description of what each does for you

2. Specs
  * Spec 1:
      Description: User can add an animal to the inventory,

      input example:
        species: "Artic Fox",
        name: "Moon",
        age: 2,
        diet: "Carnivore",
        zoo location: "Northern Trail", n
        umber of caretakers needed: 5,
        sex: "Female",
        likes: "Cool Shade",
        dislikes: "Loud noises",

      output: Moon is 2 years old and requires 5 caretakers. She can be found at the Northern Trail exhibit. She like cool shade and dislikes loud noises..
  * Spec 2:
      Description: Edit the name, age or number of caretakers dynamically for any animal using {(ngModel)},

      input example: (Edit button clicked for animal name "Moon")
          name: Star
          age: 3
          number of caretakers needed: 4,
          (Save button clicked)

      output: Star is 3 years old and requires 4 caretakers. She can be found at the Northern Trail exhibit. She like cool shade and dislikes loud noises.

  * Spec 3:
      Description: animals can be sorted by age less than two years of age will be considered young and over two years of age will be considered mature,

      input example: (mature selected) ,

      output:
        Star is 3 years old and requires 4 caretakers. She can be found at the Northern Trail exhibit. She like cool shade and dislikes loud noises.

        Prince is 4 years old and requires 6 caretakers. He can be found at the Tropical Rain Forest Building exhibit. He likes laying out in the sunshine and dislikes toys that are not rope-based.

        Star is 3 years old and requires 4 caretakers. She can be found at the Northern Trail exhibit. She like cool shade and dislikes loud noises.
        .
  * Spec 4:
      Description,
      input,
      output.

3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Template/html page for ...
  * Template/html page for ...
  * Template/html page for ... (one for each route/integrated user story)
  * Display a list of animals with that meet the sorting requirements
  * Integrate feature that...

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Add to custom styling
  * Delete unused or redundant code.
  * Provide limited options for limited input fields. ie checkboxes/radio buttons  
  * Make README awesome




I want to view a list of animals I have logged.
