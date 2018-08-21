function theBeatlesPlay(musicians, instruments) {
  var whatTheyPlay = [];
  for (var i = 0; i < musicians.length; i++) {
    var whatHePlays = musicians[i] + " plays " + instruments[i];
    whatTheyPlay[i] = whatHePlays;
  }
  return whatTheyPlay;
}

function johnLennonFacts(facts) {
  var i = 0;
  var newFacts = []
  while (i < facts.length) {
    newFacts[i] = facts[i] + "!!!";
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(n) {
  var response = [];
  do {
    reponse
    n++;
  }
  while (n < 15);
   
  
}