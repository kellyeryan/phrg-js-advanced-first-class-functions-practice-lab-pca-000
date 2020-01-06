const totalRevenue = function (drivers) {
  let totalDollars = 0;
  drivers.forEach(function(driver) {
    totalDollars += driver.revenue
  });
  return totalDollars;
};

const averageRevenue = function (drivers) {
  let totalDollars = 0;
  drivers.forEach(function(driver) {
    totalDollars += driver.revenue
  });
  return (totalDollars/drivers.length);
};


const driversByName = function (drivers) {
  return drivers.slice().sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1
    }
    return 0;
  })
}

// Receives an array of driver objects and returns a new array of driver objects sorted by their name attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.


const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function(a, b) {
    return a.revenue - b.revenue
  });
}


 // Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute from lowest to highest.

const logDriverNames = function(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
    });
  }

  const logDriversByHometown = function(drivers, location) {
    return drivers.forEach(function(driver) {
      if (driver.hometown === location) {
        console.log(driver.name);
      }
    });
  }

  // Receives an array of driver objects as the first argument and a location as the second argument. The function logs to the console the name attribute of each driver whose hometown matches the string passed in as the 'location' argument.

