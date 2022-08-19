var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');



let columas = lines.shift().trim()
let clase = lines.shift().trim()
let nombre = lines.shift().trim()


if (columas == 'vertebrado' && clase == 'ave' && nombre == 'carnivoro') {
    animal = 'aguia'
}

if (columas == 'vertebrado' && clase == 'ave' && nombre == 'onivoro') {
    animal = 'pomba'
}


if (columas == 'vertebrado' && clase == 'mamifero' && nombre == 'onivoro') {
    animal = 'homem'
}


if (columas == 'vertebrado' && clase == 'mamifero' && nombre == 'herbivoro') {
    animal = 'vaca'
}


if (columas == 'invertebrado' && clase == 'inseto' && nombre == 'hematofago') {
    animal = 'pulga'
}


if (columas == 'invertebrado' && clase == 'inseto' && nombre == 'herbivoro') {
    animal = 'lagarta'
}


if (columas == 'invertebrado' && clase == 'anelideo' && nombre == 'hematofago') {
    animal = 'sanguessuga'
}


if (columas == 'invertebrado' && clase == 'anelideo' && nombre == 'onivoro') {
    animal = 'minhoca'
}


console.log(animal);


/* if (columas == 'vertebrado') {
    if (clase == 'ave') {
        if (nombre == 'carnivoro') {
            console.log('aguia')

        } else if (nombre == 'onivoro') {
            console.log('pomba')
        }
    } else if (clase == 'mamifero') {
        if (nombre == 'onivoro') {
            console.log('homem')

        } else if (nombre == 'herbivoro') {
            console.log('vaca')
        }

    }

}

if (columas == 'invertebrado') {
    if (clase == 'insecto') {
        if (nombre == 'hematofago') {
            console.log('pulga')

        } else if (nombre == 'herbivoro') {
            console.log('lagarta')
        }
    } else if (clase == 'anelideo') {
        if (nombre == 'hematofago') {
            console.log('sanguessuga')

        } else if (nombre == 'onivoro') {
            console.log('minhoca')
        }

    }

} */