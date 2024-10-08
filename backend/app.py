from flask import Flask, request, jsonify
import pickle
import tensorflow as tf
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)

# Load the model from the pickle file
with open('model.pkl', 'rb') as f:

    model_data = pickle.load(f)

# Reconstruct the Keras model from the configuration
model = tf.keras.models.model_from_json(model_data['config'])
model.set_weights(model_data['weights'])

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    # Make sure the incoming data matches the expected format
    input_features = np.array([[data['airTemperature'], data['processTemperature'], data['rotationalSpeed'], data['torque'], data['toolWear']]])
    input_features = np.repeat(input_features, 10, axis=0).reshape(1, 10, 5)
    prediction = model.predict(input_features)
    maintenance_time = prediction[0][0].tolist()  # Convert numpy array to list for JSON serialization
    return jsonify({'maintenanceTime': maintenance_time})

if __name__ == '__main__':
    app.run(debug=True)
