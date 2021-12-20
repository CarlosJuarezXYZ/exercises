let values = {
  1: {
    carrier: "CCH",
    service: "DEX",
  },
  17: {
    carrier: "CHP",
    service: "express",
  },
};

let json = {
  data: {
    BUIN: {
      limit: 1,
      over_carrier_service_id: 17,
      under_carrier_service_id: 17,
    },
    LAJA: {
      limit: 1,
      over_carrier_service_id: 1,
      under_carrier_service_id: 1,
    },
    LEBU: {
      limit: 1,
      over_carrier_service_id: 1,
      under_carrier_service_id: 1,
    },
    LOTA: {
      limit: 1,
      over_carrier_service_id: 17,
      under_carrier_service_id: 17,
    },
  },
};

function solution() {
  let arrayAux = [];
  const entries = Object.entries(values);
  const objects = Object.entries(json.data);

  objects.forEach((valueAux) => {
    entries.forEach((value) => {
      let key = value[0];
      if (valueAux[1].over_carrier_service_id == key) {
        const auxKey = valueAux[0];
        const aux = new Object();
        aux.key = auxKey;
        aux.value = {
          limit: valueAux[1].limit,
          over: {
            carrier: value[1].carrier,
            service: value[1].service,
          },
          under: {
            carrier: value[1].carrier,
            service: value[1].service,
          },
        };

        arrayAux.push(aux);
      }
    });
  });

  result = JSON.stringify(arrayAux).replace("[", "{").replace("]", "}");

  return result;
}

console.log(solution());
