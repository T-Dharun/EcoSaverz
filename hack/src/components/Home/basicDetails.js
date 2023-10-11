class BasicDetails {
    constructor(name, watts, priority) {
      this.name = name;
      this.count = 1;
      this.watts = watts; // Store the initially provided watts
      this.priority = priority;
    }
  
    assign(count) {
      this.count = count;
    }
  
    assignWithHoursAndWeek(hours, days, watts = this.watts) {
      this.hours = hours;
      this.week = days;
      this.watts = watts; // Use the provided watts or the initially declared watts
      this.monthly = ((this.hours * this.week) * 9) * this.watts;
      this.unit = (this.monthly / 1000) * this.count;
    }
  }
  
  const app = [];
  app[0] = new BasicDetails("AC", 1700, 1);
  app[1] = new BasicDetails("FRIDGE", 80, 3);
  app[2] = new BasicDetails("FAN", 50, 2);
  app[3] = new BasicDetails("LED", 15, 3);
  app[4] = new BasicDetails("TUBELIGHT", 50, 3);
  app[5] = new BasicDetails("TV", 70, 2);
  app[6] = new BasicDetails("IRONBOX", 1200, 3);
  app[7] = new BasicDetails("MIXER", 600, 3);
  app[8] = new BasicDetails("GRINDER", 750, 3);
  app[9] = new BasicDetails("WASHINGMACHINE", 800, 2);
  app[10] = new BasicDetails("HEATER", 4000, 1);
  app[11] = new BasicDetails("MICROWAVEOVEN", 1500, 1);
  app[12] = new BasicDetails("ELECTRICSTOVE", 2000, 1);
  app[13] = new BasicDetails("VACUUMCLEANER", 900, 1);
  app[14] = new BasicDetails("HAIRDRYER", 1200, 1);
  