function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.queryCommandValue("#user-instructions");
  let apiKey = "797fa140830ac961d4b9d418btd23b6o";
  let prompt = `User instructions: Generate a Ukrainian poem about ${instructionsInput.value} and translate it into French.`;
  let context =
    "You are a romentic poem expert and ove to write short poems. Your mission is to generate a 4 line poem in basic HTML. Seperate each line from each other including translation. Don't include any title to the poem. Make sure to follow the user instructions.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
