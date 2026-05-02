// =========================================
// 1. EFFET MACHINE À ÉCRIRE (Page Accueil)
// =========================================
var texteTitre = "MAÎTRES DU CIEL";
var indexLettre = 0;

function effetMachine() {
    var titreElement = document.getElementById("titre-machine");
    if (titreElement != null) {
        if (indexLettre < texteTitre.length) {
            titreElement.innerHTML += texteTitre.charAt(indexLettre);
            indexLettre++;
            setTimeout(effetMachine, 100);
        }
    }
}

// =========================================
// 2. COMPTEUR DE VITESSE (Page Accueil)
// =========================================
var vitesse = 0.00;
var intervalCompteur;

function animerCompteur() {
    var compteurElement = document.getElementById("machCounter");
    if (compteurElement != null) {
        vitesse += 0.05;
        compteurElement.innerHTML = vitesse.toFixed(2);
        
        if (vitesse >= 2.25) {
            compteurElement.innerHTML = "2.25";
            clearInterval(intervalCompteur);
        }
    }
}

// Lancement automatique au chargement
window.onload = function() {
    effetMachine();
    intervalCompteur = setInterval(animerCompteur, 50);
};

// =========================================
// 3. FILTRE DE LA GALERIE (Page Galerie)
// =========================================
function filtrerGalerie(categorie) {
    var items = document.getElementsByClassName("gallery-item");
    
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
        
        if (categorie === 'tout') {
            items[i].style.display = "block";
        } else if (items[i].className.indexOf(categorie) !== -1) {
            items[i].style.display = "block";
        }
    }
}

// =========================================
// 4. MODAL / LIGHTBOX (Page Galerie)
// =========================================
function ouvrirModal(sourceImage) {
    var modal = document.getElementById("imageModal");
    var imgDansModal = document.getElementById("imgDansModal");
    
    modal.style.display = "block";
    imgDansModal.src = sourceImage;
}

function fermerModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// =========================================
// 5. SYSTÈME D'ANALYSE DYNAMIQUE (Page Technique)
// =========================================
function changerAnalyse(avion) {
    // On récupère tous les éléments HTML à modifier
    var titre = document.getElementById("analyse-titre");
    var image = document.getElementById("analyse-img");
    
    var vitesseLabel = document.getElementById("vitesse-label");
    var vitesseStatut = document.getElementById("vitesse-statut");
    var vitesseBarre = document.getElementById("vitesse-barre");
    
    var furtiviteLabel = document.getElementById("furtivite-label");
    var furtiviteStatut = document.getElementById("furtivite-statut");
    var furtiviteBarre = document.getElementById("furtivite-barre");
    
    var armes = document.getElementById("analyse-armes");

    // On vérifie que les éléments existent sur la page actuelle
    if (titre == null) return; 

    // Conditions pour chaque avion
    if (avion === 'f22') {
        titre.innerHTML = "SYSTÈME D'ANALYSE : F-22 RAPTOR";
        image.src = "images/f22.PNG"; // Garde ton image actuelle
        
        vitesseLabel.innerHTML = "VITESSE (MACH 2.25)";
        vitesseStatut.innerHTML = "EXCELLENT";
        vitesseBarre.style.width = "95%";
        vitesseBarre.innerHTML = "95%";
        
        furtiviteLabel.innerHTML = "CAPACITÉ FURTIVE (RCS 0.0001 m²)";
        furtiviteStatut.innerHTML = "MAXIMALE";
        furtiviteBarre.style.width = "99%";
        furtiviteBarre.innerHTML = "99%";
        
        armes.innerHTML = 
            '<li class="list-group-item bg-transparent text-light border-secondary"><strong class="text-danger">M61A2 Vulcan</strong> - Canon rotatif 20mm</li>' +
            '<li class="list-group-item bg-transparent text-light border-secondary"><strong class="text-danger">AIM-120 AMRAAM</strong> - 6x Missiles Air-Air</li>' +
            '<li class="list-group-item bg-transparent text-light border-secondary"><strong class="text-danger">GBU-32 JDAM</strong> - 2x Bombes de précision</li>';
            
    } else if (avion === 'rafale') {
        titre.innerHTML = "SYSTÈME D'ANALYSE : DASSAULT RAFALE";
        // Si tu ajoutes une image rafale.jpg dans ton dossier images :
        image.src = "images/Rafale.jpg"; 
        
        vitesseLabel.innerHTML = "VITESSE (MACH 1.8)";
        vitesseStatut.innerHTML = "MOYENNE";
        vitesseBarre.style.width = "75%";
        vitesseBarre.innerHTML = "75%";
        
        furtiviteLabel.innerHTML = "CAPACITÉ FURTIVE (RCS 1.0 m²)";
        furtiviteStatut.innerHTML = "RÉDUITE (4.5 Gén)";
        furtiviteBarre.style.width = "40%";
        furtiviteBarre.innerHTML = "40%";
        
        armes.innerHTML = 
            '<li class="list-group-item bg-transparent text-light border-secondary"><strong class="text-danger">GIAT 30M791</strong> - Canon 30mm</li>' +
            '<li class="list-group-item bg-transparent text-light border-secondary"><strong class="text-danger">MICA IR/EM</strong> - 6x Missiles d\'interception</li>' +
            '<li class="list-group-item bg-transparent text-light border-secondary"><strong class="text-danger">SCALP-EG</strong> - 2x Missiles de croisière</li>';
            
    } else if (avion === 'typhoon') {
        titre.innerHTML = "SYSTÈME D'ANALYSE : EUROFIGHTER TYPHOON";
        image.src = "images/RAF.jpg"; 
        
        vitesseLabel.innerHTML = "VITESSE (MACH 2.0)";
        vitesseStatut.innerHTML = "ÉLEVÉE";
        vitesseBarre.style.width = "85%";
        vitesseBarre.innerHTML = "85%";
        
        furtiviteLabel.innerHTML = "CAPACITÉ FURTIVE (RCS 1.2 m²)";
        furtiviteStatut.innerHTML = "FAIBLE";
        furtiviteBarre.style.width = "30%";
        furtiviteBarre.innerHTML = "30%";
        
        armes.innerHTML = 
            '<li class="list-group-item bg-transparent text-light border-secondary"><strong class="text-danger">Mauser BK-27</strong> - Canon 27mm</li>' +
            '<li class="list-group-item bg-transparent text-light border-secondary"><strong class="text-danger">Meteor</strong> - 4x Missiles Longue Portée</li>' +
            '<li class="list-group-item bg-transparent text-light border-secondary"><strong class="text-danger">Paveway IV</strong> - 2x Bombes guidées Laser</li>';
            
    } else if (avion === 'su57') {
        titre.innerHTML = "SYSTÈME D'ANALYSE : SU-57 FELON";
        image.src = "images/Sukhoi.jpg"; 
        
        vitesseLabel.innerHTML = "VITESSE (MACH 2.0)";
        vitesseStatut.innerHTML = "ÉLEVÉE";
        vitesseBarre.style.width = "85%";
        vitesseBarre.innerHTML = "85%";
        
        furtiviteLabel.innerHTML = "CAPACITÉ FURTIVE (RCS 0.5 m²)";
        furtiviteStatut.innerHTML = "ÉLEVÉE";
        furtiviteBarre.style.width = "80%";
        furtiviteBarre.innerHTML = "80%";
        
        armes.innerHTML = 
            '<li class="list-group-item bg-transparent text-light border-secondary"><strong class="text-danger">GSh-30-1</strong> - Canon 30mm</li>' +
            '<li class="list-group-item bg-transparent text-light border-secondary"><strong class="text-danger">R-77M</strong> - 4x Missiles Air-Air</li>' +
            '<li class="list-group-item bg-transparent text-light border-secondary"><strong class="text-danger">Kh-69</strong> - 2x Missiles de croisière furtifs</li>';
    }
}
// =========================================
// 6. ENCYCLOPÉDIE DES SYSTÈMES DE COMBAT (Page Combat)
// =========================================
function afficherInfosCombat(systeme) {
    // On récupère les éléments HTML à modifier
    var titre = document.getElementById("combat-titre");
    var description = document.getElementById("combat-desc");
    var icone = document.getElementById("combat-icone");

    // On vérifie qu'on est bien sur la page combat
    if (titre == null) return;

    // Conditions pour chaque système
    if (systeme === 'hud') {
        icone.className = "fas fa-vr-cardboard fa-4x text-success mb-3";
        titre.innerHTML = "HUD ET VISEUR DE CASQUE";
        description.innerHTML = 
            "<p>Le <strong>HUD (Head-Up Display)</strong>, ou Affichage Tête Haute, est un écran transparent situé sur le pare-brise du cockpit. Il permet au pilote de lire sa vitesse, son altitude et son ciblage sans avoir à baisser les yeux vers ses instruments.</p>" +
            "<p>Dans les avions de 5ème génération (comme le F-35), le HUD physique disparaît au profit d'un <strong>Viseur de Casque (HMDS)</strong> : les informations sont projetées directement sur la visière du pilote, lui permettant de verrouiller une cible simplement en la regardant, même si elle se trouve derrière lui.</p>";

    } else if (systeme === 'radar') {
        icone.className = "fas fa-satellite-dish fa-4x text-success mb-3";
        titre.innerHTML = "RADAR AESA";
        description.innerHTML = 
            "<p>L'<strong>AESA (Active Electronically Scanned Array)</strong> est la technologie radar la plus avancée. Contrairement aux anciens radars qui devaient tourner mécaniquement comme une parabole, l'AESA est fixe.</p>" +
            "<p>Il est composé de milliers de petits modules qui émettent des ondes indépendamment. Il peut scanner le ciel, brouiller les radars ennemis et communiquer en même temps. Il est presque indétectable car il change sa fréquence des milliers de fois par seconde.</p>";

    } else if (systeme === 'cm') {
        icone.className = "fas fa-shield-alt fa-4x text-warning mb-3"; // Icône jaune
        titre.innerHTML = "CONTRE-MESURES : FLARES ET CHAFF";
        description.innerHTML = 
            "<p>Les contre-mesures sont des défenses passives utilisées pour tromper les missiles ennemis :</p>" +
            "<ul>" +
                "<li class='mb-2'><strong>Flares (Leurres thermiques) :</strong> Des boules de magnésium enflammées larguées par l'avion pour aveugler les missiles à guidage infrarouge (qui cherchent la chaleur du moteur).</li>" +
                "<li><strong>Chaff (Paillettes) :</strong> Un nuage de millions de fines lamelles d'aluminium largué dans les airs. Ce nuage crée un 'faux avion' sur l'écran radar ennemi, perturbant les missiles à guidage radar.</li>" +
            "</ul>";

    } else if (systeme === 'rcs') {
        icone.className = "fas fa-eye-slash fa-4x text-primary mb-3"; // Icône bleue
        titre.innerHTML = "LA FURTIVITÉ ET LE RCS";
        description.innerHTML = 
            "<p>Le <strong>RCS (Radar Cross Section)</strong> ou Surface Équivalente Radar (SER) mesure à quel point un avion est visible sur un radar.</p>" +
            "<p>La furtivité n'est pas de l'invisibilité optique. C'est l'art de renvoyer les ondes radar ailleurs que vers l'émetteur. Pour y arriver, les avions comme le F-22 utilisent des <strong>formes géométriques précises</strong> (pas d'angles droits) et des <strong>matériaux absorbants (RAM)</strong> peints sur la carlingue.</p>" +
            "<p class='text-success fw-bold'>Résultat : Un chasseur de 20 mètres de long apparaît sur les radars avec la taille d'une balle de golf.</p>";

    } else if (systeme === 'armes') {
        icone.className = "fas fa-crosshairs fa-4x text-danger mb-3"; // Icône rouge
        titre.innerHTML = "CODES OTAN : FOX 1, 2 ET 3";
        description.innerHTML = 
            "<p>Dans les communications militaires, les pilotes utilisent le mot-code <strong>'FOX'</strong> pour annoncer le tir d'un missile Air-Air :</p>" +
            "<ul>" +
                "<li class='mb-2'><strong>FOX 1 :</strong> Tir d'un missile à guidage radar semi-actif. Le pilote doit garder le nez de son avion pointé sur l'ennemi jusqu'à l'impact.</li>" +
                "<li class='mb-2'><strong>FOX 2 :</strong> Tir d'un missile à guidage infrarouge (chaleur), comme le célèbre AIM-9 Sidewinder. Idéal pour le combat rapproché (Dogfight).</li>" +
                "<li><strong>FOX 3 :</strong> Tir d'un missile à guidage radar actif (comme le AIM-120 AMRAAM). Le missile possède son propre radar. Le pilote peut 'tirer et oublier' (Fire and Forget) et s'enfuir immédiatement.</li>" +
            "</ul>";
    }
}
// =========================================
// 7. VALIDATION DU FORMULAIRE DE RECRUTEMENT
// =========================================
function validerRecrutement() {
    // Récupération des valeurs des champs
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var motivation = document.getElementById("motivation").value;
    var erreurZone = document.getElementById("message-erreur");

    // Réinitialisation du message d'erreur
    erreurZone.style.display = "none";
    erreurZone.innerHTML = "";

    // Vérification des champs obligatoires
    if (nom === "" || email === "" || motivation === "") {
        erreurZone.innerHTML = "<i class='fas fa-exclamation-triangle'></i> ALERTE : Les champs Nom, Email et Motivations sont obligatoires.";
        erreurZone.style.display = "block";
        return false; // Empêche l'envoi du formulaire
    }

    // Vérification basique de l'email (doit contenir un @)
    if (email.indexOf("@") === -1) {
        erreurZone.innerHTML = "<i class='fas fa-exclamation-triangle'></i> ALERTE : Format d'email non valide.";
        erreurZone.style.display = "block";
        return false;
    }

    // Si tout est correct
    alert("TRANSMISSION RÉUSSIE : Votre dossier a été envoyé au Haut Commandement.");
    return true; // Autorise l'envoi
}