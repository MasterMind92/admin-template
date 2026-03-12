import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const PromotionSchema = Yup.object().shape({
  code: Yup.string().required("Code promotion obligatoire"),
  description: Yup.string().required("Description obligatoire"),
  typeRemise: Yup.string().required("Type de remise obligatoire"),
  valeurRemise: Yup.number().positive("Valeur invalide").required(),
  dateDebut: Yup.date().required("Date début obligatoire"),
  dateFin: Yup.date()
    .min(Yup.ref("dateDebut"), "La date fin doit être après la date début")
    .required("Date fin obligatoire")
});

const PromotionForm = () => {

  return (
    <div className="container-fluid mt-4">
      <div className="card shadow border-0">

        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Gestion des Promotions</h5>
        </div>

        <div className="card-body">

          <Formik
            initialValues={{
              code: "",
              description: "",
              typeRemise: "",
              valeurRemise: "",
              dateDebut: "",
              dateFin: "",
              conditionsApplication: ""
            }}

            validationSchema={PromotionSchema}

            onSubmit={async (values, { resetForm }) => {

              try {

                console.log(values);

                // exemple API
                // await axios.post("/api/promotions", values);

                alert("Promotion enregistrée avec succès");

                resetForm();

              } catch (error) {

                alert("Erreur lors de l'enregistrement");

              }

            }}
          >

          {({ errors, touched }) => (

            <Form>

              <div className="row g-3">

                {/* Code promo */}
                <div className="col-md-4">
                  <label className="form-label">Code Promotion</label>
                  <Field
                    name="code"
                    className={`form-control ${errors.code && touched.code ? "is-invalid" : ""}`}
                  />
                  <ErrorMessage name="code" component="div" className="invalid-feedback"/>
                </div>

                {/* Type remise */}
                <div className="col-md-4">
                  <label className="form-label">Type Remise</label>
                  <Field
                    as="select"
                    name="typeRemise"
                    className={`form-select ${errors.typeRemise && touched.typeRemise ? "is-invalid" : ""}`}
                  >
                    <option value="">Choisir</option>
                    <option value="Pourcentage">Pourcentage (%)</option>
                    <option value="Montant">Montant fixe</option>
                  </Field>
                  <ErrorMessage name="typeRemise" component="div" className="invalid-feedback"/>
                </div>

                {/* Valeur remise */}
                <div className="col-md-4">
                  <label className="form-label">Valeur Remise</label>
                  <Field
                    type="number"
                    name="valeurRemise"
                    className={`form-control ${errors.valeurRemise && touched.valeurRemise ? "is-invalid" : ""}`}
                  />
                  <ErrorMessage name="valeurRemise" component="div" className="invalid-feedback"/>
                </div>

                {/* Date début */}
                <div className="col-md-6">
                  <label className="form-label">Date Début</label>
                  <Field
                    type="date"
                    name="dateDebut"
                    className={`form-control ${errors.dateDebut && touched.dateDebut ? "is-invalid" : ""}`}
                  />
                  <ErrorMessage name="dateDebut" component="div" className="invalid-feedback"/>
                </div>

                {/* Date fin */}
                <div className="col-md-6">
                  <label className="form-label">Date Fin</label>
                  <Field
                    type="date"
                    name="dateFin"
                    className={`form-control ${errors.dateFin && touched.dateFin ? "is-invalid" : ""}`}
                  />
                  <ErrorMessage name="dateFin" component="div" className="invalid-feedback"/>
                </div>

                {/* Description */}
                <div className="col-12">
                  <label className="form-label">Description</label>
                  <Field
                    as="textarea"
                    name="description"
                    rows="2"
                    className={`form-control ${errors.description && touched.description ? "is-invalid" : ""}`}
                  />
                  <ErrorMessage name="description" component="div" className="invalid-feedback"/>
                </div>

                {/* Conditions */}
                <div className="col-12">
                  <label className="form-label">Conditions d'application</label>
                  <Field
                    as="textarea"
                    name="conditionsApplication"
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
                  Enregistrer la promotion
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

export default PromotionForm;