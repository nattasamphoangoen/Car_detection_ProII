from firebase import firebase
import RPi.GPIO as GPIO
import sys
import time
import Adafruit_DHT
sensor = Adafruit_DHT.DHT11
pin = 4
GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)
GPIO.setup(11, GPIO.OUT)
firebase = firebase.FirebaseApplication('https://test-present-51940.firebaseio.com', None)
print "**********    INICIO  *************"
while True:
    humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
    result = firebase.get('/test', 'led')
    firebase.post('/test/temp', temperature)
    if(result == 1):
	GPIO.output(11, GPIO.HIGH)
    else:
	GPIO.output(11, GPIO.LOW)
   
    if humidity is not None and temperature is not None:
        print 'Temp={0:0.1f}*C'.format(temperature)
        time.sleep(0.5)
    else:
        print 'Failed to get reading. Try again!'
		    
GPIO.cleanup()

