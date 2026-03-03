import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const ClientSchema = Yup.object().shape({
  civilite: Yup.string().required("Civilité obligatoire"),
  nom: Yup.string().required("Nom obligatoire"),
  prenom: Yup.string().required("Prénom obligatoire"),
  email: Yup.string().email("Email invalide"),
  telephone: Yup.string().required("Téléphone obligatoire"),
  dateNaissance: Yup.date().required("Date de naissance obligatoire"),
  typeClient: Yup.string().required("Type client obligatoire"),
  statut: Yup.string().required("Statut obligatoire"),
});

const ClientForm = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-12">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-dark text-white">
              <h5 className="mb-0">Gestion des Clients</h5>
            </div>

            <div className="card-body">
              <Formik
                initialValues={{
                  civilite: "",
                  nom: "",
                  prenom: "",
                  email: "",
                  telephone: "",
                  adresse: "",
                  dateNaissance: "",
                  typeClient: "",
                  dateInscription: "",
                  statut: "Actif",
                  pointsFidelite: 0,
                }}
                validationSchema={ClientSchema}
                onSubmit={async (values, { resetForm }) => {
                  try {
                    console.log(values);

                    // Exemple API
                    // await axios.post("/api/clients ", values);

                    alert("Client enregistré avec succès !");
                    resetForm();
                  } catch (error) {
                    alert("Erreur lors de l'enregistrement");
                  }
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="row g-4">

                      {/* Civilité */}
                      <div className="col-md-3">
                        <label className="form-label">Civilité</label>
                        <Field
                          as="select"
                          name="civilite"
                          className={`form-select ${errors.civilite && touched.civilite ? "is-invalid" : ""}`}
                        >
                          <option value="">Choisir...</option>
                          <option value="Mr">Mr</option>
                          <option value="Mme">Mme</option>
                          <option value="Mlle">Mlle</option>
                        </Field>
                        <ErrorMessage name="civilite" component="div" className="invalid-feedback" />
                      </div>

                      {/* Nom */}
                      <div className="col-md-4">
                        <label className="form-label">Nom</label>
                        <Field
                          type="text"
                          name="nom"
                          className={`form-control ${errors.nom && touched.nom ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage name="nom" component="div" className="invalid-feedback" />
                      </div>

                      {/* Prénom */}
                      <div className="col-md-5">
                        <label className="form-label">Prénom</label>
                        <Field
                          type="text"
                          name="prenom"
                          className={`form-control ${errors.prenom && touched.prenom ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage name="prenom" component="div" className="invalid-feedback" />
                      </div>

                      {/* Email */}
                      <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <Field
                          type="email"
                          name="email"
                          className={`form-control ${errors.email && touched.email ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                      </div>

                      {/* Téléphone */}
                      <div className="col-md-6">
                        <label className="form-label">Téléphone</label>
                        <Field
                          type="text"
                          name="telephone"
                          className={`form-control ${errors.telephone && touched.telephone ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage name="telephone" component="div" className="invalid-feedback" />
                      </div>

                      {/* Adresse */}
                      <div className="col-12">
                        <label className="form-label">Adresse</label>
                        <Field
                          as="textarea"
                          name="adresse"
                          rows="2"
                          className="form-control"
                        />
                      </div>

                      {/* Date Naissance */}
                      <div className="col-md-4">
                        <label className="form-label">Date Naissance</label>
                        <Field
                          type="date"
                          name="dateNaissance"
                          className={`form-control ${errors.dateNaissance && touched.dateNaissance ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage name="dateNaissance" component="div" className="invalid-feedback" />
                      </div>

                      {/* Type Client */}
                      <div className="col-md-4">
                        <label className="form-label">Type Client</label>
                        <Field
                          as="select"
                          name="typeClient"
                          className={`form-select ${errors.typeClient && touched.typeClient ? "is-invalid" : ""}`}
                        >
                          <option value="">Choisir...</option>
                          <option value="Standard">Standard</option>
                          <option value="Premium">Premium</option>
                          <option value="VIP">VIP</option>
                        </Field>
                        <ErrorMessage name="typeClient" component="div" className="invalid-feedback" />
                      </div>

                      {/* Statut */}
                      <div className="col-md-4">
                        <label className="form-label">Statut</label>
                        <Field
                          as="select"
                          name="statut"
                          className="form-select"
                        >
                          <option value="Actif">Actif</option>
                          <option value="Inactif">Inactif</option>
                        </Field>
                      </div>

                      {/* Date Inscription */}
                      <div className="col-md-6">
                        <label className="form-label">Date Inscription</label>
                        <Field
                          type="date"
                          name="dateInscription"
                          className="form-control"
                        />
                      </div>

                      {/* Points Fidélité */}
                      <div className="col-md-6">
                        <label className="form-label">Points Fidélité</label>
                        <Field
                          type="number"
                          name="pointsFidelite"
                          className="form-control"
                        />
                      </div>

                    </div>

                    <div className="mt-4 text-end">
                      <button type="submit" className="btn btn-success px-4">
                        Enregistrer
                      </button>
                    </div>

                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientForm;