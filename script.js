const url = 'https://blockchain.info/ticker';


// Créer une requète 
function recupererPrix() {
    let requete = new XMLHttpRequest(); // creer un objet 

    requete.open('GET', url); // Premier parametre Get / POST

    requete.responseType = 'json'; // Nous attendons du JSON

    requete.send(); // Nous envoyons notre requete

    // dess qu'on recoitt une reponse, cette fonction est executée
    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if(requete.status === 200) {
                let reponse = requete.response; // on stock la reponse
                console.log(reponse);
                let prixEnEuros = this.response.EUR.last;
                document.querySelector('#price_label').textContent = prixEnEuros;
            }
            else{
                ('Un probleme est survenu, merci de revenir plus tarf.');
            }
        }
    };
    console.log('Prix actualise');
}

setInterval(recupererPrix, 1000);