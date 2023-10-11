const int pulsePin = 2; // Connect the pulse output to pin 2
volatile unsigned long pulseCount = 0;
unsigned long interval = 10000; // Set the interval to 10 seconds (10000 milliseconds)
unsigned long lastPulseTime = 0;
float pulseFactor = 3200; // Pulse factor for your energy meter (pulses per kWh)

void setup() {
  Serial.begin(9600);
  attachInterrupt(digitalPinToInterrupt(pulsePin), countPulse, FALLING);
}

void loop() {
  unsigned long currentTime = millis();

  if (currentTime - lastPulseTime >= interval) {
    if (pulseCount > 0) {
      float energyConsumed = pulseCount / pulseFactor; // Calculate energy consumed in kWh
      if(energyConsumed>=0&&energyConsumed<=1){
      Serial.print("Energy Consumed (Wh): ");
      Serial.println(energyConsumed);
      }
      pulseCount = 0;
    }
    lastPulseTime = currentTime;
  }
}

void countPulse() {
  pulseCount++;
}

void serialEvent() {
  while (Serial.available()) {
    char command = Serial.read();
    if (command == 'S' || command == 's') {
      interval = 10000; // Set the interval to 10 seconds
      Serial.println("Interval set to 10 seconds.");
    }
  }
}
