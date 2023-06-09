import React, { useState } from 'react';




function Stages() {
    const Etudiants = "Foire aux questions - FAQ\n Est-ce que le stage est obligatoire?\nLe stage de fin d'études en informatique est obligatoire pour l'obtention du diplôme collgégial. >Quel est l'horaire de l'étudiant durant les stages?\nL'étudiant doit respecter l'horaire de l'entreprise durant son stage. >Est-ce que l'étudiant travaille pendant les journées pédagogiques etles journées de rattrapage?\nL'étudiant doit respecter l'horaire de l'entreprise durant son stage et ce mêmedurant les journées pédagogiques et de rattrapage. >Quelle est la durée d'un stage de fin d'études?\n  La durée du stage est de 15 semaines pour les deux profils de sortie (réseaux et programmation). >Quelles sont les dates prévues pour les stages?\n Les stages sont prévus du 21 janvier au 3 mai 2019. "
    const Employeurs = "Formulaire d'inscription de milieu de stage\nStages réguliers ayant lieu à la session hiver \nLes stages sont du 21 janvier au 3 mai 2019 \n(il est toutefois possible après entente avec le coordonnateur de débuter le stage un peu plus tôt)\nSur réception de ce formulaire, le coordonnateur des stages\nentrera en contact avec le responsable en entreprise pour discuter du stage.\nVeuillez vous référez à la page <a>Profil de sortie</a> pour connaître le profil de sortie et les compétences des étudiants.\n"


    return (
        <div className=''>
			<body>
            <p>
                  <h4>Édition  - Directives pour les étudiants</h4>
			  Tâches à effectuer par l'étudiant à la session d'automne  (c'est-à-dire maintenant):<br/>
			  
				Au plus tard le mardi 18 septembre à 12h00: Produire un CV que vous devez remettre au coordonnateur des stages (Sylvain Labranche). <br/>
				  
				  En format "Word" ou en format PDF que vous allez remettre sur Moodle pour le cours "2018-2019 : Stages de fin d'études en informatique".<br/>
				   Vous devez remettre un seul fichier .ZIP (pas d'autre format accepté) nommé
				   NomFamillePrenom.ZIP (pas d'espace, ni d'accent dans le nom du fichier)<br/>

				Contacter les employeurs pour leur proposer vos services
				
				Pour chaque employeur que vous contactez vous devez inscrire ses coordonnées sur le formulaire <a href="../documents/contact_employeurs.pdf"></a><br/>
				
				Fichier en format <a href="../documents/contact_employeurs.docx">Word.</a><br/>
				
				Lorsque vous rencontrez un employeur (entrevue) vous devez remplir le formulaire &nbsp; 
				<a href="../documents/rencontre_employeur.pdf">&laquo;rencontre&nbsp;employeur&raquo;</a>.<br/>
				
				Fichier en format <a href="../documents/rencontre_employeur.docx">Word.</a>
				
				Vous devez rencontrer au moins trois (3) employeurs, à moins bien sûr que vous ayez 
				trouvé votre stage avant. <br/>
				Vous devriez avoir au moins trois formulaires &laquo;rencontre&raquo;, 
				un par employeur rencontré.
				<br/>
				Au plus tard le vendredi 2 novembre à 12h00: remettre vos formulaires &laquo;contact&nbsp;employeurs&raquo; et 
				&laquo;rencontre&nbsp;employeur&raquo; remplis:<br/>
					Dans colnet (dans un fichier .ZIP, comme indiqué ci-haut, n'oubliez pas d'inclure tous les formulaires &laquo;contact&raquo;
					et &laquo;rencontre&raquo; en format Word) <br/>

				Ainsi le 2 novembre, vous devriez avoir trouvé votre stage.<br/>
			  
			  
			  			  {/* <Sites Web pour vous aider: */}
		

			    À l'hiver 
			  Pour comprendre le fonctionnement général des projets de fin d'études 
			  (stages) je vous invite à consulter les différentes sections du site Web dans le menu de droite.<br/>
				
			 Lisez ce document concernant 
             {/* style="text-align: left;" */}
			  <p >Plus de détails pour les&nbsp;
			      <a href="rapports_techniques.php">rapports techniques</a></p> 			      
				<li>TRÈS IMPORTANT: pour toute communication par courriel avec le coordonnateur
					vous devez inscrire dans le sujet du message:</li>  
					<li class="retrait petit">SUJET: Stages profil #DA nom - raison</li>
					<li class="retrait petit">profil est soit réseaux, soit prog</li>
					<li class="retrait petit">#DA est votre numéro d'admission</li>
					<li class="retrait petit">nom est votre nom</li>
					<li class="retrait petit">par exemple: Stages réseaux 201014109 Joe Larue - contenu CV</li>  
					<li>N'oubliez pas d'inscrire la raison du message (après le tiret).</li>
					<li>Si ces conditions ne sont pas respectées, j'ignorerai le courriel et je ne répondrai pas.</li>
	
					<br/><br/>


			  Déroulement des stages / Horaire de travail
			  Les stages ont lieu durant la session d'hiver.
			  Ils sont d'une durée de 15 semaines, du x janvier au y mai 2024.<br/><br/>
			  Vous trouverez les détails dans la section "Les profils du programme
			  informatique, les dates et les spécificités des stages".<br/><br/>
			  
			  Le stagiaire est tenu de respecter l'horaire  
			  régulier de l'entreprise et des employés occupant des fonctions similaires.<br/><br/>
			  Pendant une semaine normale de travaille un stagiaire doit faire entre 35 et 40 heures.<br/><br/>
			  Les étudiants qui ne respectent pas le nombre d'heures établies pour une semaine normale 
			  doivent reprendre les heures manquantes en débutant leur stage plus tôt ou en terminant plus tard.<br/><br/>
			  Les étudiants qui font plus de 40 heures par semaine pourront terminer leur stage plus tôt 
			   (après entente avec le coordonnateur des stages et le professeur-superviseur).<br/><br/>
			  Un étudiant qui profite de cette règle ne peut terminer son stage après la 
			  date de présentation des stages.<br/><br/>
			  

			  Pendant les journées pédagogiques et les journées
			  de rattrapage (lecture) identifiées sur le calendrier scolaire, le stagiaire
			  est tenu d'être présent en milieu de stage.<br/><br/>
			  Il est possible de débuter le stage plus tôt (que la date prévue) après entente entre
			  l'étudiant, le coordonnateur et l'employeur (un stage ne peut débuter plus tôt que le 
			  premier lundi de janvier de l'année du stage)<br/><br/>
			  
			  Il y aura deux rencontres obligatoires en ligne
			  Vendredi 12h00-13h00 en janvier avant le début des stages.
			Vendredi 12h00-13h00 vers le milieu du stage 
			  (la date sera communiquée plus tard).<br/><br/>
			  
			  Les étudiants doivent remettre un rapport hebdomadaire 
			  décrivant leurs tâches de la semaine au plus tard le lundi suivant 
			  avant 11h00 AM (il est suggéré de remettre ce rapport
			  le vendredi en fin d'après-midi en terminant la semaine). <br/><br/>
			  Ce rapport est 
			  envoyé par courriel au professeur superviseur. Le format du rapport 
			  sera discuté avec le professeur superviseur de l'étudiant.<br/><br/>
			  
			  Le professeur superviseur contactera l'étudiant (selon l'horaire
			  préalablement établit avec l'étudiant) à chaque semaine.<br/><br/>
			  Le professeur-superviseur rencontre les
			  étudiants à chaque deux semaines (à moins d'une entente 
			  particulière avec le superviseur de l'entreprise).<br/><br/>
			  
			  À la fin des stages (habituellement dans la semaine
			  d'évaluation, une à deux semaines après les stages), les stagiaires seront 
			  appellés à présenter leurs projets de fin d'études aux professeurs et aux autres
			  stagiaires.<br/><br/>
			   Les superviseurs en entreprise sont les bienvenus à ces présentations 
			  (les personnes intéressées devraient convenir de l'horaire avec le professeur-superviseur).
            </p>
			</body>
        </div>
    );
};

export default Stages;
