const { json } = require("body-parser");

const handleClarifaiApiCall = (imageUrl) => {
  // ///////////////////////////////////////////////////////////////////////////////////////////////////
  // // In this section, we set the user authentication, user and app ID, model details, and the URL
  // // of the image we want as an input. Change these strings to run your own example.
  // //////////////////////////////////////////////////////////////////////////////////////////////////

  // // Your PAT (Personal Access Token) can be found in the portal under Authentification
  // const PAT = import.meta.env.VITE_CLARIFAI_API_KEY;
  // // Specify the correct user_id/app_id pairings
  // // Since you're making inferences outside your app's scope
  // const USER_ID = "vargaae";
  // const APP_ID = "test-application-1589318146";
  // // Change these to whatever model and image URL you want to use
  // const MODEL_ID = "general-image-recognition";
  // const IMAGE_URL = imageUrl; ////////////////////////////////////////////////////////////

  // const raw = JSON.stringify({
  //   user_app_id: {
  //     user_id: USER_ID,
  //     app_id: APP_ID,
  //   },
  //   inputs: [
  //     {
  //       data: {
  //         image: {
  //           url: IMAGE_URL,
  //         },
  //       },
  //     },
  //   ],
  // });

  // const requestOptions = {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     Authorization: "Key " + PAT,
  //   },
  //   body: raw,
  // };

  // return requestOptions;
};

module.exports = {
  handleClarifaiApiCall,
};
