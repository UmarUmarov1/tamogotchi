const tamogotchi = {
    name: 'Wolf',
    meal: 2,
    energy: 5,
    mood: 1,
  
    setName: function (changeName) {
      this.name = changeName;
    },
  
    eat: function () {
      if(this.meal < 5) {
        this.meal += 1;
      }
        this.mood -= 1;
    },
    sleep: function () {
      if(this.energy < 5) {
        this.energy += 1;
      }
      this.meal -= 1;
    },
    play: function () {
      if(this.mood < 5) {
        this.mood += 1;
      }
      this.energy -= 1;
    },
  
    getStatus: function () {
      let meal1 = this.meal;
      if(this.meal <= 0) {
        this.meal = `${this.name} умер :(`;
      } else
      if(this.meal < 3) {
        this.meal = `Я голоден (${meal1})`;
      } else 
      this.meal = `Я не голоден (${meal1})`;
  
      let energy2 = this.energy;
      if(this.energy <= 0) {
        this.energy = `${this.name} умер :(`;
      } else
      if(this.energy  < 3) {
        this.energy = `Я хочу спать (${energy2})`;
      } else
        this.energy = `Я не хочу спать (${energy2})`;
  
      let mood3 = this.mood;
      if(this.mood <= 0) {
        this.mood = `${this.name} умер :(`;
      } else
      if(this.mood < 3) {
        this.mood = `Мне скучно (${mood3})`;
      } else
        this.mood = `Мне весело (${mood3})`;
  
      return `Имя: ${this.name}, Еда: ${this.meal}, Энергия: ${this.energy}, Настроение: ${this.mood}.`;
    },
  
    };
  
    // tamogotchi.eat()
    // tamogotchi.sleep()
    // tamogotchi.play()
    console.log(tamogotchi.getStatus());