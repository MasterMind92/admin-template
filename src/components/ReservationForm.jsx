import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const ReservationSchema = Yup.object().shape({
  numero: Yup.string().required("Numéro de réservation obligatoire"),
  dateArrivee: Yup.date().required("Date d'arrivée obligatoire"),
  dateDepart: Yup.date().required("Date de départ obligatoire"),
  nbAdultes: Yup.number().min(1, "Au moins 1 adulte").required(),
  nbEnfants: Yup.number().min(0),
  statut: Yup.string().required("Statut obligatoire"),
  source: Yup.string().required("Source obligatoire")
});

const ReservationForm = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="card shadow border-0">

        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Nouvelle Réservation</h5>
        </div>

        <div className="card-body">

          <Formik
            initialValues={{
              numero: "",
              dateCreation: "",
              dateArrivee: "",
              dateDepart: "",
              nbAdultes: 1,
              nbEnfants: 0,
              statut: "En attente",
              source: "",
              notes: ""
            }}

            validationSchema={ReservationSchema}

            onSubmit={async (values, { resetForm }) => {
              try {

                console.log(values);

                // exemple API
                // await axios.post("/api/reservations", values);

                alert("Réservation enregistrée");

                resetForm();

              } catch (error) {

                alert("Erreur lors de l'enregistrement");

              }
            }}
          >

            {({ errors, touched }) => (

              <Form>

                <div className="row g-3">

                  {/* Numéro */}
                  <div className="col-md-4">
                    <label className="form-label">Numéro Réservation</label>
                    <Field
                      name="numero"
                      className={`form-control ${errors.numero && touched.numero ? "is-invalid" : ""}`}
                    />
                    <ErrorMessage name="numero" component="div" className="invalid-feedback"/>
                  </div>

                  {/* Date création */}
                  <div className="col-md-4">
                    <label className="form-label">Date Création</label>
                    <Field
                      type="date"
                      name="dateCreation"
                      className="form-control"
                    />
                  </div>

                  {/* Statut */}
                  <div className="col-md-4">
                    <label className="form-label">Statut</label>
                    <Field
                      as="select"
                      name="statut"
                      className="form-select"
                    >
                      <option value="En attente">En attente</option>
                      <option value="Confirmée">Confirmée</option>
                      <option value="Annulée">Annulée</option>
                      <option value="Terminée">Terminée</option>
                    </Field>
                  </div>

                  {/* Date arrivée */}
                  <div className="col-md-6">
                    <label className="form-label">Date Arrivée</label>
                    <Field
                      type="date"
                      name="dateArrivee"
                      className={`form-control ${errors.dateArrivee && touched.dateArrivee ? "is-invalid" : ""}`}
                    />
                    <ErrorMessage name="dateArrivee" component="div" className="invalid-feedback"/>
                  </div>

                  {/* Date départ */}
                  <div className="col-md-6">
                    <label className="form-label">Date Départ</label>
                    <Field
                      type="date"
                      name="dateDepart"
                      className={`form-control ${errors.dateDepart && touched.dateDepart ? "is-invalid" : ""}`}
                    />
                    <ErrorMessage name="dateDepart" component="div" className="invalid-feedback"/>
                  </div>

                  {/* Adultes */}
                  <div className="col-md-6">
                    <label className="form-label">Nombre Adultes</label>
                    <Field
                      type="number"
                      name="nbAdultes"
                      className="form-control"
                    />
                  </div>

                  {/* Enfants */}
                  <div className="col-md-6">
                    <label className="form-label">Nombre Enfants</label>
                    <Field
                      type="number"
                      name="nbEnfants"
                      className="form-control"
                    />
                  </div>

                  {/* Source */}
                  <div className="col-md-6">
                    <label className="form-label">Source</label>
                    <Field
                      as="select"
                      name="source"
                      className={`form-select ${errors.source && touched.source ? "is-invalid" : ""}`}
                    >
                      <option value="">Choisir</option>
                      <option value="Site Web">Site Web</option>
                      <option value="Téléphone">Téléphone</option>
                      <option value="Agence">Agence</option>
                      <option value="Booking">Booking</option>
                      <option value="Walk-in">Sur place</option>
                    </Field>
                    <ErrorMessage name="source" component="div" className="invalid-feedback"/>
                  </div>

                  {/* Notes */}
                  <div className="col-12">
                    <label className="form-label">Notes</label>
                    <Field
                      as="textarea"
                      name="notes"
                      rows="3"
                      className="form-control"
                    />
                  </div>

                </div>

                <div className="mt-4 text-end">

                  <button type="submit" className="btn btn-success px-4">
                    Enregistrer la réservation
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

export default ReservationForm;