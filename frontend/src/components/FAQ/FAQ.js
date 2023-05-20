import React, { useState } from 'react';

import '../../styles/App.css';

function FAQ() {




	return (
		<div className="FAQ">
			<p>
				Foire aux questions - FAQ
				<ul>
					<br /> <li>Est-ce que le stage est obligatoire?<br />

						Le stage de fin d'études en informatique est obligatoire
						pour l'obtention du diplôme collégial. </li>
					<br /><li>
						Quel est l'horaire de l'étudiant durant les stages?<br />

						L'étudiant doit respecter l'horaire de l'entreprise durant son stage. </li>
					<br /> <li>
						Est-ce que l'étudiant travaille pendant les journées pédagogiques et
						les journées de rattrapage?<br />

						L'étudiant doit respecter l'horaire de l'entreprise durant son stage et ce même
						durant les journées pédagogiques et de rattrapage. </li>
					<br /> <li>
						Quelle est la durée d'un stage de fin d'études?<br />

						La durée du stage est de 15 semaines pour les deux profils de sortie (réseaux et programmation). </li>
					<br /><li>
						Quelles sont les dates prévues pour les stages?<br />

						Les stages sont prévus du 21 janvier au 3 mai 2019. </li>
				</ul>

			</p>

		</div>
	);
};

export default FAQ;
