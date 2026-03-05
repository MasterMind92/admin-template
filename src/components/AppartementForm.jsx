import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const AppartementSchema = Yup.object().shape({
  code: Yup.string().required("Code appartement obligatoire"),
  type: Yup.string().required("Type obligatoire"),
  surface: Yup.number().positive("Surface invalide").required(),
  etage: Yup.number().required(),
  capaciteMax: Yup.number().min(1, "Capacité minimum 1").required(),
  etat: Yup.string().required("Etat obligatoire")
});

const AppartementForm = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="card shadow border-0">

        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">Gestion des Appartements</h5>
        </div>

        <div className="card-body">

          <Formik
            initialValues={{
              code: "",
              type: "",
              surface: "",
              etage: "",
              capaciteMax: 1,
              etat: "Disponible",
              dernierNettoyage: "",
              dateDerniereRenovation: "",
              observations: ""
            }}

            validationSchema={AppartementSchema}

            onSubmit={async (values, { resetForm }) => {

              try {

                console.log(values);

                // Exemple API
                // await axios.post("/api/appartements", values);

                alert("Appartement enregistré avec succès");

                resetForm();

              } catch (error) {

                alert("Erreur lors de l'enregistrement");

              }

            }}
          >

          {({ errors, touched }) => (

            <Form>

              <div className="row g-3">

                {/* Code */}
                <div className="col-md-4">
                  <label className="form-label">Code Appartement</label>
                  <Field
                    name="code"
                    className={`form-control ${errors.code && touched.code ? "is-invalid" : ""}`}
                  />
                  <ErrorMessage name="code" component="div" className="invalid-feedback"/>
                </div>

                {/* Type */}
                <div className="col-md-4">
                  <label className="form-label">Type</label>
                  <Field
                    as="select"
                    name="type"
                    className={`form-select ${errors.type && touched.type ? "is-invalid" : ""}`}
                  >
                    <option value="">Choisir</option>
                    <option value="Studio">Studio</option>
                    <option value="T1">T1</option>
                    <option value="T2">T2</option>
                    <option value="T3">T3</option>
                    <option value="Penthouse">Penthouse</option>
                  </Field>
                  <ErrorMessage name="type" component="div" className="invalid-feedback"/>
                </div>

                {/* Surface */}
                <div className="col-md-4">
                  <label className="form-label">Surface (m²)</label>
                  <Field
                    type="number"
                    name="surface"
                    className={`form-control ${errors.surface && touched.surface ? "is-invalid" : ""}`}
                  />
                  <ErrorMessage name="surface" component="div" className="invalid-feedback"/>
                </div>

                {/* Etage */}
                <div className="col-md-4">
                  <label className="form-label">Étage</label>
                  <Field
                    type="number"
                    name="etage"
                    className="form-control"
                  />
                </div>

                {/* Capacité */}
                <div className="col-md-4">
                  <label className="form-label">Capacité Max</label>
                  <Field
                    type="number"
                    name="capaciteMax"
                    className="form-control"
                  />
                </div>

                {/* Etat */}
                <div className="col-md-4">
                  <label className="form-label">État</label>
                  <Field
                    as="select"
                    name="etat"
                    className="form-select"
                  >
                    <option value="Disponible">Disponible</option>
                    <option value="Occupé">Occupé</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Nettoyage">Nettoyage</option>
                  </Field>
                </div>

                {/* Dernier nettoyage */}
                <div className="col-md-6">
                  <label className="form-label">Dernier Nettoyage</label>
                  <Field
                    type="date"
                    name="dernierNettoyage"
                    className="form-control"
                  />
                </div>

                {/* Dernière rénovation */}
                <div className="col-md-6">
                  <label className="form-label">Date Dernière Rénovation</label>
                  <Field
                    type="date"
                    name="dateDerniereRenovation"
                    className="form-control"
                  />
                </div>

                {/* Observations */}
                <div className="col-12">
                  <label className="form-label">Observations</label>
                  <Field
                    as="textarea"
                    name="observations"
                    rows="3"
                    className="form-control"
                  />
                </div>

              </div>

              <div className="mt-4 text-end">

                <button
                  type="submit"
                  className="btn btn-success px-4"
                >
                  Enregistrer
                </button>

              </div>

            </Form>

          )}

          </Formik>

        </div>

      </div>
    </div>
  );
};

export default AppartementForm;