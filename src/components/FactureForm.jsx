import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const FactureSchema = Yup.object().shape({
  numeroFacture: Yup.string().required("Numéro de facture obligatoire"),
  dateFacture: Yup.date().required("Date facture obligatoire"),
  montantHT: Yup.number().positive("Montant invalide").required(),
  montantTVA: Yup.number().min(0).required(),
  montantTTC: Yup.number().positive().required(),
  statutPaiement: Yup.string().required(),
  modePaiement: Yup.string().required("Mode paiement obligatoire")
});

const FactureForm = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="card shadow border-0">

        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">Gestion des Factures</h5>
        </div>

        <div className="card-body">

          <Formik
            initialValues={{
              numeroFacture: "",
              dateFacture: "",
              montantHT: "",
              montantTVA: "",
              montantTTC: "",
              statutPaiement: "Non payé",
              datePaiement: "",
              modePaiement: ""
            }}

            validationSchema={FactureSchema}

            onSubmit={async (values, { resetForm }) => {

              try {

                console.log(values);

                // Exemple appel API
                // await axios.post("/api/factures", values);

                alert("Facture enregistrée");

                resetForm();

              } catch (error) {

                alert("Erreur lors de l'enregistrement");

              }

            }}
          >

          {({ errors, touched }) => (

            <Form>

              <div className="row g-3">

                {/* Numero facture */}
                <div className="col-md-4">
                  <label className="form-label">Numéro Facture</label>
                  <Field
                    name="numeroFacture"
                    className={`form-control ${errors.numeroFacture && touched.numeroFacture ? "is-invalid" : ""}`}
                  />
                  <ErrorMessage name="numeroFacture" component="div" className="invalid-feedback"/>
                </div>

                {/* Date facture */}
                <div className="col-md-4">
                  <label className="form-label">Date Facture</label>
                  <Field
                    type="date"
                    name="dateFacture"
                    className={`form-control ${errors.dateFacture && touched.dateFacture ? "is-invalid" : ""}`}
                  />
                  <ErrorMessage name="dateFacture" component="div" className="invalid-feedback"/>
                </div>

                {/* Statut paiement */}
                <div className="col-md-4">
                  <label className="form-label">Statut Paiement</label>
                  <Field
                    as="select"
                    name="statutPaiement"
                    className="form-select"
                  >
                    <option value="Non payé">Non payé</option>
                    <option value="Payé">Payé</option>
                    <option value="Partiel">Paiement partiel</option>
                  </Field>
                </div>

                {/* Montant HT */}
                <div className="col-md-4">
                  <label className="form-label">Montant HT</label>
                  <Field
                    type="number"
                    name="montantHT"
                    className={`form-control ${errors.montantHT && touched.montantHT ? "is-invalid" : ""}`}
                  />
                  <ErrorMessage name="montantHT" component="div" className="invalid-feedback"/>
                </div>

                {/* TVA */}
                <div className="col-md-4">
                  <label className="form-label">Montant TVA</label>
                  <Field
                    type="number"
                    name="montantTVA"
                    className="form-control"
                  />
                </div>

                {/* TTC */}
                <div className="col-md-4">
                  <label className="form-label">Montant TTC</label>
                  <Field
                    type="number"
                    name="montantTTC"
                    className={`form-control ${errors.montantTTC && touched.montantTTC ? "is-invalid" : ""}`}
                  />
                  <ErrorMessage name="montantTTC" component="div" className="invalid-feedback"/>
                </div>

                {/* Mode paiement */}
                <div className="col-md-6">
                  <label className="form-label">Mode Paiement</label>
                  <Field
                    as="select"
                    name="modePaiement"
                    className={`form-select ${errors.modePaiement && touched.modePaiement ? "is-invalid" : ""}`}
                  >
                    <option value="">Choisir</option>
                    <option value="Espèces">Espèces</option>
                    <option value="Carte bancaire">Carte bancaire</option>
                    <option value="Virement">Virement</option>
                    <option value="Mobile Money">Mobile Money</option>
                  </Field>
                  <ErrorMessage name="modePaiement" component="div" className="invalid-feedback"/>
                </div>

                {/* Date paiement */}
                <div className="col-md-6">
                  <label className="form-label">Date Paiement</label>
                  <Field
                    type="date"
                    name="datePaiement"
                    className="form-control"
                  />
                </div>

              </div>

              <div className="mt-4 text-end">

                <button
                  type="submit"
                  className="btn btn-success px-4"
                >
                  Enregistrer la facture
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

export default FactureForm;