import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faRecycle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export default function UserForm(){

    const [nom,SetNom] = useState("");
    const [prenom,SetPrenom] = useState("");
    const [telephone,SetTelephone] = useState("");
    const [email,SetEmail] = useState("");
    const [password,SetPass] = useState("");
    const [confpass,SetConfPass] = useState("");
    const [etat,SetEtat] = useState("");
    const [role,SetRole] = useState("");

    function handleNomChange(event){
        SetNom(event.target.value);
    }

    function handlePrenomChange(event){
        SetPrenom(event.target.value);
    }

    function handleEmailChange(event){
        SetEmail(event.target.value);
    }

    function handleTelephoneChange(event){
        SetTelephone(event.target.value);
    }

    function handlePassChange(event){
        SetPass(event.target.value);
    }

    function handleConfPassChange(event){
        SetConfPass(event.target.value);
    }

    function handleEtatChange(event){
        SetEtat(event.target.value);
    }

    function handleRoleChange(event){
        SetRole(event.target.value);
    }   

    function handleSubmit(e) {
        e.preventDefault();
        alert("Formulaire bel et bien soumis");
    }

    return(
        
        <div>
            
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-12 col-md-6 col-lg-8">
                        <h2 className="mb-4">Ajout Utilisateurs</h2>
                        <div className="card">
                            
                            <div className="card-body">
                                <form action="" onSubmit={handleSubmit} method="POST" role="form">

                                    {/* <legend>Ajout Utilisateur</legend> */}

                                    <div className="form-group row mb-4">
                                        <div className="col-md-6">
                                            <label htmlFor="">Nom</label>
                                            <input type="text" className="form-control" id="input" name="nom" onChange = {handleNomChange} value={nom} placeholder="Entrez votre nom" />
                                        </div>
                                        <div className="col-md-6">
                                            <label  htmlFor="">Prénoms</label>
                                            <input type="text" className="form-control" id="input" name="prenom" onChange = {handlePrenomChange} value={prenom} placeholder="Entrez vos Prenoms" />
                                        </div>
                                        
                                    </div>
                                
                                    <div className="form-group row mb-4">
                                        <div className="col-md-6">
                                            <label  htmlFor="">Téléphone</label>
                                            <input type="number" className="form-control" id="input" name="telephone" onChange = {handleTelephoneChange} value={telephone} placeholder="Entrez votre Telephone" />
                                        </div>
                                        <div className="col-md-6">
                                            <label  htmlFor="">Email</label>
                                            <input type="email" className="form-control" id="input" name="email" onChange = {handleEmailChange} value={email} placeholder="Entrez votre Email" />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-4">
                                        <div className="col-md-6">
                                            <label  htmlFor="">Mot de passe</label>
                                            <input type="password" className="form-control" id="input" name="password" onChange = {handlePassChange} value={password} placeholder="Entrez votre Mot de Passe" />
                                        </div>
                                        <div className="col-md-6">
                                            <label  htmlFor="">Confirmer Mot de passe</label>
                                            <input type="password" className="form-control" id="input" name="conf-password" onChange = {handleConfPassChange} value={confpass} placeholder="Confirmez votre Mot de passe" />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-4">
                                        <div className="col-md-6">
                                            <label htmlFor="" >Etat</label>
                                            <select className="form-control" onChange = {handleEtatChange} value={etat} name="etat" id="">
                                                <option selected> Etat</option>
                                                <option value="A"> Actif</option>
                                                <option value="I"> Inactif</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="" >Role</label>
                                            <select className="form-control" onChange = {handleRoleChange} value={role} name="role" id="">
                                                <option defaultValue={role} > Choisissez un Role</option>
                                                <option value="Admin" > Admin</option>
                                                <option value="Standard" > Standard</option>
                                                <option value="Finance" > Finance</option>
                                                <option value="Employe" > Employe</option>
                                            </select>
                                        </div>
                                        
                                    </div>

                                    <div className="form-group row justify-content-between">

                                        <div className="col-12 col-md-3">
                                            
                                            <div className="d-grid gap-2">
                                            <button
                                                type="submit"
                                                name=""
                                                id=""
                                                className="btn btn-success"
                                            >
                                                 <FontAwesomeIcon icon={faRecycle} /> Reinitialiser
                                            </button>
                                        </div>   
                                    </div>   

                                        <div className="col-12 col-md-3">
                                            
                                            <div className="d-grid gap-2">
                                            <button
                                                type="submit"
                                                name=""
                                                id=""
                                                className="btn btn-primary"
                                            >
                                                <FontAwesomeIcon icon={faCheck} /> Valider
                                            </button>
                                        </div>                                                                                                           
                                    </div>
                                        
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        
        
    );
}