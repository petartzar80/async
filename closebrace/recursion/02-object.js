// const movies2019 = {
//   disney: {
//     antManAndTheWasp: 216648740,
//     blackPanther: 700059566,
//     incredibles2: 608549440,
//     avengersInfinityWar: 678815482,
//     solo: 213767512,
//   },
//   fox: {
//     bohemianRhapsody: 164985592,
//     deadpool2: 3184914126,
//   },
//   paramount: {
//     aquietPlace: 188024361,
//     missionImpossibleFallout: 220159104,
//   },
//   sony: {
//     hotelTransylvania3: 167510016,
//     venom: 212300606,
//   },
//   universal: {
//     jurassicWorldFallenKingdom: 416769345,
//     theGrinch: 204576230,
//   },
//   warner: {
//     aStarIsBorn: 193918438,
//     crazyRichAsians: 173950732,
//   },
// };

const movies2018 = {
  disney: {
    antManAndTheWasp: 216648740,
    blackPanther: 700059566,
    incredibles2: 608549440,
    avengersInfinityWar: 678815482,
    solo: 213767512,
  },
  fox: {
    bohemianRhapsody: 164985592,
    deadpool2: 318491426,
  },
  paramount: {
    aquietplace: 188024361,
    missionImpossibleFallout: 220159104,
  },
  sony: {
    hotelTransylvania3: 167510016,
    venom: 212300606,
  },
  universal: {
    jurassicWorldFallenKingdom: 416769345,
    theGrinch: 204576230,
  },
  warner: {
    aStarIsBorn: 193918438,
    crazyRichAsians: 173950732,
  },
};

function sumMovies(value) {
  if (typeof value === 'object') {
    console.log(Object.values(value));
    let sum = 0;
    for (let subVal of Object.values(value)) {
      sum += sumMovies(subVal);
    }
    return sum;
  } else {
    return value;
  }
}

const total = sumMovies(movies2018);
console.log(total);
