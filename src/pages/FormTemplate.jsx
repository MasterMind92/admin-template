import { useState } from "react";


export default function UserForm(){

    const [name,setName] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }
     
    return(
        
        <div>
            
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-12 col-md-6 col-lg-8">
                        <h2 className="mb-4">Ajout Utilisateurs</h2>
                        <div className=card">
                            
                            <div className=card-body">
                                <form action="" method="POST" role="form">

                                    {/* <legend>Ajout Utilisateur</legend> */}

                                    <div className="form-group row mb-4">
                                        <div className="col-md-4">
                                            <label>label</label>
                                            <input type="text" className="form-control" onChange={handleChange} id="input" value={name} placeholder="Input field" />
                                        </div>
                                        <div className="col-md-4">
                                            <label >label</label>
                                            <input type="text" className="form-control" id="input" placeholder="Input field" />
                                        </div>
                                        <div className="col-md-4">
                                            <label >label</label>
                                            <input type="text" className="form-control" id="input" placeholder="Input field" />
                                        </div>
                                        
                                    </div>
                                
                                    <div className="form-group row mb-4">
                                        <div className="col-md-6">
                                            <label >label</label>
                                            <input type="text" className="form-control" id="input" placeholder="Input field" />
                                        </div>
                                        <div className="col-md-6">
                                            <label >label</label>
                                            <input type="text" className="form-control" id="input" placeholder="Input field" />
                                        </div>
                                        
                                    </div>

                                    

                                    <div className="form-group row mb-4">
                                        <div className="col-md-6">
                                            <label >label</label>
                                            <input type="text" className="form-control" id="input" placeholder="Input field" />
                                        </div>
                                        <div className="col-md-6">
                                            <label >label</label>
                                            <input type="text" className="form-control" id="input" placeholder="Input field" />
                                        </div>
                                        
                                    </div>

                                    <div className="form-group row mb-4">
                                        <div className="col-md-6">
                                            <label >label</label>
                                            <input type="text" className="form-control" id="input" placeholder="Input field" />
                                        </div>
                                        <div className="col-md-6">
                                            <label >label</label>
                                            <input type="text" className="form-control" id="input" placeholder="Input field" />
                                        </div>
                                        
                                    </div>

                                    <div className="form-group row">

                                        <div className="col-12 col-md-3">
                                            <button type="submit" className="btn btn-primary my-3 btn-block"> Soumettre</button>
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