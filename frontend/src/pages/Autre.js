import React, { useEffect, useState } from 'react';

const Autre = () => {
  // const [students, setStudents] = useState([]);
  const [password, setPassword] = useState(''); // État pour gérer l'entrée de l'utilisateur
  const [email, setEmail] = useState(''); // État pour gérer l'entrée de l'utilisateur
  const [name, setName] = useState(''); // État pour gérer l'entrée de l'utilisateur



  // useEffect(() => {
  //   fetch('http://localhost:3333/')
  //     .then(response => response.json())
  //     .then(data => {
  //       setStudents(data);
  //     })
  //     .catch(error => {
  //       console.error('There was an error!', error);
  //     });
  // }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    // Envoyer les données à l'API
    fetch('https://13.48.148.226:3000', { // Remplacez '/api/endpoint' par votre point de terminaison spécifique
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, name: name, password: password  }), // Assurez-vous que la structure de l'objet correspond à ce que votre backend attend
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Vous pouvez ici rafraîchir la liste des étudiants ou gérer la réponse comme vous le souhaitez
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <input
  type="text"
  name="email"
  value={email}
  onChange={handleInputChange}
/>
<input
  type="text"
  name="name"
  value={name}
  onChange={handleInputChange}
/>
<input
  type="password" // Utilisez type="password" pour le champ de mot de passe pour une meilleure sécurité
  name="password"
  value={password}
  onChange={handleInputChange}
/>
      <button onClick={handleSubmit}>Envoyer</button>
      <h1>réponse:</h1>
    </div>
  );
};

export default Autre;