class Scooter {
  // scooter code here
  static nextSerial = 1;
  constructor(station){
    this.station = station;
    this.user = null;
    this.serial =  Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = fales;
  }
  rent(user){
    if(this.charge > 20 && !this.isBroken){
      this.station = null;
      this.user = user;
      console.log(`Scooter ${this.serial} rented to ${user}`);
    } else if(this.charge <= 20){
      throw new Error('Scooter needs to charge');
    } else if(this.isBroken) {
      throw new Error('Scooter needs repair')
    }
  }
   dock(station){
    this.station = station;
    this.user = null;
    console.log(`Scooter ${this.serial} docked at ${station}`);
   }
   recharge(){
    console.log('Recharging scooter...');
    const rechargeIntervale = setInterval(() => {
      if(this.charge < 100){
        this.charge += 10;
        console.log(`Charge: ${this.charge}%`);
      } else {
        console.log('Scooter fully charged');
        clearInterval(rechargeIntervale);
      }
    }, 1000)
   }
   requestRepair(){
    console.log('Repair requested...');
    setTimeout(() => {
      this.isBroken = false;
      console.log(`Scooter ${this.serial} repaired`)
    }, 5000)
   }
}

module.exports = Scooter
