import requests
import json
import random
import time

def generate_random_health_data():
    heart_rate = random.randint(80, 120)
    spO2 = random.randint(90, 100)
    glucose = random.randint(80, 200)
    temperature = round(random.uniform(35.0, 40.0), 1)
    return {
        "userid": "123456789",
        "healthData": {
            "heartRate": heart_rate,
            "spO2": spO2,
            "glucose": glucose,
            "temperature": temperature
        }
    }

# URL to post the data
url = "http://localhost:5000/node/usertransaction"

# Number of data points to generate and post
num_data_points = 50

for _ in range(num_data_points):
    health_data = generate_random_health_data()
    payload = json.dumps(health_data)
    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, headers=headers, data=payload)
    print(response.text)
    #time.sleep(1)  # Wait for 1 second between each post
