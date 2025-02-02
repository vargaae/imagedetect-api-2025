from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the Account's Security section
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "clarifai"
#APP_ID = "main"

# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = "general-english-image-caption-blip"
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = "cdb690f13e62470ea6723642044f95e4"
#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id

# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)

model_url = (
    "https://clarifai.com/clarifai/main/models/general-image-recognition"
)
image_url = "https://s3.amazonaws.com/samples.clarifai.com/featured-models/image-captioning-statue-of-liberty.jpeg"

# The Predict API also accepts data through URL, Filepath & Bytes.
# Example for predict by filepath:
# model_prediction = Model(model_url).predict_by_filepath(filepath, input_type="text")

# Example for predict by bytes:
# model_prediction = Model(model_url).predict_by_bytes(image_bytes, input_type="text")

model_prediction = Model(url=model_url, pat="8223810da7484e638622d62d141fc442").predict_by_url(
    image_url, input_type="image"
)

# Get the output
print(model_prediction.outputs[0].data.concepts)



# from clarifai.client.workflow import Workflow

# image_url = "https://cdn-bfgco.nitrocdn.com/PLGJnButkKeCQigeKyiwHwnQLZJDOQZI/assets/images/optimized/rev-96fa12a/delamere.com/wp-content/uploads/2022/02/Picture1-1024x683.jpg"
# workflow_url =  "https://clarifai.com/vargaae/ai-2025-image-recognition/workflows/general-image-recognition-workflow-7oun7"
# # Creating the workflow
# image_classifcation_workflow = Workflow(
#     url=workflow_url, pat="8223810da7484e638622d62d141fc442"
# )

# # Getting the predictions
# result = image_classifcation_workflow.predict_by_url(image_url ,
#     input_type="image",
# )
# print(result.results[0].outputs[0].data)
