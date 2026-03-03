

export function Login(){


    return(
        <>
            <div className="wrapper">
                <div className="container">
                    <div className="row justify-content-center align-items-center" style={{height:"100vh"}}>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                
                                <div className="card-body">
                                    
                                    <form action="" method="POST" role="form">
                                        <legend className="text-center">LOGO</legend>
                                    
                                        <div className="form-group mb-3">
                                            <label htmlFor="">Login</label>
                                            <input type="text" className="form-control" id="" placeholder="Entrez votre mot de passe" />
                                        </div>

                                        <div className="form-group mb-3">
                                            <label htmlFor="">Password</label>
                                            <input type="password" className="form-control" id="" placeholder="Entrez votre mot de passe" />
                                        </div>

                                        <div className="form-group row justify-content-between mb-3">
                                            <div className="col">
                                                <div class="form-check">
                                                  <label class="form-check-label">
                                                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" checked />
                                                    Se souvenir de moi
                                                  </label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <a href="#" className="">Mot de passe oublie ?</a>
                                            </div>
                                        </div>

                                        <div className="form-group row justify-content-center">
                                            <div className="col-12">
                                                <div className="d-grid gap-2">
                                                    <button className="btn btn-primary" type="submit">Valider</button>
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
        </>
    );
}