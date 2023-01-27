let sveUkupno = 0;

function dodajUKorpu(filmovi) {
	let sviFilmovi = filmovi.closest('.single-film');
	let cijena = sviFilmovi.querySelector('.price').innerText;
	let imeFilma = sviFilmovi.querySelector('h3').innerText;
	let kolicina = sviFilmovi.querySelector('input').value;
	let korpa = document.querySelector('.naruceni-filmovi');



	if(parseInt(kolicina) > 0) {
		cijena = cijena.substring(1);
		cijena = parseInt(cijena);	


		let ukupno = cijena * parseInt(kolicina);

		sveUkupno += ukupno;

		korpa.innerHTML += `<div class="kosara-single-film">
									<h3>${imeFilma}</h3>
									<p>$${cijena} x ${kolicina} = $<span>${ukupno}<span></p>
									<button onclick="obrisiIzKorpe(this)" class="obrisi-film">Ukloni</button>
								</div>`;

		document.querySelector('.total').innerText = `Ukupno za platiti: $${sveUkupno}`;

		filmovi.innerText = 'U korpi';
		filmovi.setAttribute('disabled', 'true');


	} else {
		alert('Izaberi film');
		}	


}

function obrisiIzKorpe(element) {
let brisanje = element.closest('.kosara-single-film');
let cijena = brisanje.querySelector('p span').innerText;
let imefilma = brisanje.querySelector('h3').innerText;
let filmovi = document.querySelectorAll('.single-film');

cijena = parseInt(cijena);

sveUkupno -= cijena;

document.querySelector('.total').innerText = `Ukupno za platiti: $${sveUkupno}`;

brisanje.remove();

filmovi.forEach(function (film) {
	let imeFilma = film.querySelector('.si-content h3').innerText;
		if(imeFilma === imefilma) {
			film.querySelector('.actions input').value = 0;
			film.querySelector('.actions button').removeAttribute('disabled');
			film.querySelector('.actions button').innerText = 'Gledaj';
		}
								})
}

