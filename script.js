// JavaScript kód
var convertButton = document.getElementById('convertButton');
var resetButton = document.getElementById('resetButton');
var inputField = document.getElementById('inputField');
var outputDiv = document.getElementById('output');

// Funkcia pre konverziu
function performConversion(input) {
  if (input.match(/^\d+$/)) {
    return convertToText(input);
  } else {
    return convertToCode(input);
  }
}

// Funkcia na vymazanie obsahu vstupného poľa
function clearInputField() {
  inputField.value = '';
}

convertButton.addEventListener('click', function() {
  var input = inputField.value;
  outputDiv.textContent = performConversion(input);
  clearInputField();
});

resetButton.addEventListener('click', function() {
  clearInputField();
  outputDiv.textContent = '';
});

// Event listener pre stlačenie klávesy Enter v texte
inputField.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    var input = inputField.value;
    outputDiv.textContent = performConversion(input);
    clearInputField();
    event.preventDefault();
  }
});

    function convertCode(input) {
      if (input.match(/^\d+$/)) {
        return convertToText(input);
      } else {
        return convertToCode(input);
      }
    }

    function convertToCode(text) {
      var result = '';
      var words = text.trim().split(/\s+/); // Upravené rozdelenie textu na slová (používa regulárny výraz pre medzery)
      var expressions = {
        'Gebäude (Hauptgebäude)': '10',
        'Gebäude überkragend': '10-1',
        'Balkon': '10-01',
        'OG1': '10-1',
        'OG2': '10-2',
        'OG3': '10-3',
        'OG4': '10-4',
        'OG5': '10-5',
        'DG': '10-6',
        'UG1': '10-7',
        'UG2': '10-8',
        'UG3': '10-9',
        'Nebengebäude': '11',
        'Betriebsgebäude': '12',
        'Kirche': '13',
        'Kapelle': '13',
        'Garage': '14',
        'Hütte': '15',
        'Stadel': '15',
        'unterirdischer Bauteil': '16',
        'Denkmal': '17',
        'Säule': '18',
        'Steher': '18',
        'Stütze': '18',
        'Terrasse': '19',
        'Stiege': '20',
        'Rampe': '20',
        'Auffahrt': '20',
        'Lichtschacht': '21',
        'Dach (Außenkante)': '22',
        'Dach (First)': '22-1',
        'Kamin': '22-2',
        'Pflastersteine': '23',
        'Betonierte Fläche': '24',
        'Mauer unten': '25',
        'Mauer oben': '26',
        'Mauer mit Zaun unten': '27',
        'Mauer mit Zaun oben': '28',
        'sonst. Mauer unten': '29',
        'sonst. Mauer oben': '30',
        'Steinriegel unten': '31(-1)',
        'Steinriegel oben': '32(-1)',
        'Zaun': '33',
        'Geländer': '33',
        'Einfahrt': '33-1',
        'Schranken': '33-2',
        'lebender Zaun': '34',
        'Hecke': '34',
        'Straßenbelagsrand (Asph.)': '35',
        'Ampel': '35-1',
        'Blinklicht': '35-1',
        'Fahnenmast': '35-2',
        'Ortstafel (1 Steher)': '35-3',
        'Ortstafel (2 Steher)': '35-4',
        'KM-Tafel': '35-5',
        'KM-Stein': '35-6',
        'Verkehrsz. (1 Steher)': '35-7',
        'Verkehrsz. (2 Steher)': '35-8',
        'Reklame (1 Steher)': '35-9',
        'Reklame (2 Steher)': '35-10',


      };
      
      for (var i = 0; i < words.length; i++) {
        var currentWord = words[i];
        var nextWord = words[i + 1] || '';
        var currentExpression = currentWord + ' ' + nextWord;
    
        if (expressions.hasOwnProperty(currentExpression)) {
          result += expressions[currentExpression];
          i++; // Preskočíme nasledujúce slovo, keď sme našli zhodujúci sa výraz
        } else if (expressions.hasOwnProperty(currentWord)) {
          result += expressions[currentWord];
        } else {
          result += '';
        }
    
        if (i < words.length - 1) {
          result += ' neni';
        }
      }
    
      return result;
    }
    
    function convertToText(code) {
      var result = '';
      var segments = code.match(/\d{2}/g);
      if (segments) {
        segments.forEach(function(segment) {
          switch (segment) {
            case '10':
              result += 'dom ';
              break;
            case '09':
              result += 'koniec linie ';
              break;
            default:
              result += 'neznámy kód ';
              break;
          }
        });
      }
      return result.trim();
    }