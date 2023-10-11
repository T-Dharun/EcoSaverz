import serial
from flask import Flask, jsonify
from flask_cors import CORS  # Import CORS from flask_cors

app = Flask(__name__)

CORS(app, resources={r"/data/*": {"origins": "http://localhost:3000"}})

# Initialize the variable to hold the serial connection
arduinoData = None

def setup_serial():
    global arduinoData
    arduinoData = serial.Serial('COM3', 115200)  # Adjust port accordingly

def read_sensor_data():
    if arduinoData:
        if arduinoData.in_waiting > 0:
            dataPacket = arduinoData.readline()
            decoded_data = dataPacket.decode('utf-8')  # Convert bytes to a string

            # Convert the value to float
            try:
                sensor_value = float(decoded_data.strip())
                print(sensor_value)
                return sensor_value
            except ValueError:
                print("Invalid data format:", decoded_data)
                return None

        else:
            return None

@app.route('/data', methods=['GET'])
def get_sensor_data():
    if not arduinoData:
        setup_serial()  # Ensure the serial connection is set up before reading sensor data

    sensor_value = read_sensor_data()  # Read sensor data
    return jsonify({'sensor_value': sensor_value})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)  # Run on localhost:5000
