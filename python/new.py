import pyrebase
import RPi.GPIO as GPIO
import sys
import time
import Adafruit_DHT
sensor = Adafruit_DHT.DHT11
pin = 4

config = {
  "apiKey": "AIzaSyBzeOFNsABlJCNtzPMYqS7sDZQc4kG9AIU",
  "authDomain": "test-present-51940.firebaseapp.com",
  "databaseURL": "https://test-present-51940.firebaseio.com",
  "storageBucket": "test-present-51940.appspot.com",
}
firebase = pyrebase.initialize_app(config)
db = firebase.database()
GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)
GPIO.setup(11, GPIO.OUT)
#dht11 = 13
print "**********    INICIO  *************"
while True:
    humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
    salidaLed1 = db.child("test/led").get()
    db.child("test/temp").set(temperature)
    
    if(bool(salidaLed1.val()) == True):
	GPIO.output(11, GPIO.HIGH)
    else:
	GPIO.output(11, GPIO.LOW)
   
    if humidity is not None and temperature is not None:
        print 'Temp={0:0.1f}*C'.format(temperature)
        time.sleep(0.5)
    else:
        print 'Failed to get reading. Try again!'
		    
GPIO.cleanup()