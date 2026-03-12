import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const InventaireSchema = Yup.object().shape({
  reference: Yup.string().required("Référence obligatoire"),
  libelle: Yup.string().required("Libellé obligatoire"),
  categorie: Yup.string().required("Catégorie obligatoire"),
  quantiteStock: Yup.number().min(0, "Stock invalide").required(),
  seuilMin: Yup.number().min(0).required(),
  localisation: Yup.string().required("Localisation obligatoire"),
  etat: Yup.string().required("Etat obligatoire")
});

const InventaireForm = () => {

  return (
    <div className="container-fluid mt-4">
      <div className="card shadow border-0">

        <div className="card-header bg-secondary text-white">
          <h5 className="mb-0">Gestion de l'Inventaire</h5>
        </div>

        <div className="card-body">

          <Formik
            initialValues={{
              reference: "",
              libelle: "",
              categorie: "",
              quantiteStock: 0,
              seuilMin: 0,
              localisation: "",
              etat: "Disponible"
            }}

            validationSchema={InventaireSchema}

            onSubmit={async (values, { resetForm }) => {

              try {

                console.log(values);

                // exemple API
                // await axios.post("/api/inventaire", values);

                alert("Article enregistré avec succès");

                resetForm();

              } catch (error) {

                alert("Erreur lors de l'enregistrement");

              }

            }}
          >

          {({ errors, touched }) => (

            <Form>

              <div className="row g-3">

                {/* Référence */}
                <div className="col-md-4">
                  <label className="form-label">Référence</label>
                  <Field
                    name="reference"
                    className={`form-control ${errors.reference && touched.reference ? "is-invalid" : ""}`}
                  />
                  <ErrorMessage name="reference" component="div" className="invalid-feedback"/>
                </div>

                {/* Libellé */}
                <div className="col-md-4">
                  <label className="form-label">Libellé</label>
                  <Field
                    name="libelle"
                    className={`form-control ${errors.libelle && touched.libelle ? "is-invalid" : ""}`}
                  />
                  <ErrorMessage name="libelle" component="div" className="invalid-feedback"/>
                </div>

                {/* Catégorie */}
                <div className="col-md-4">
                  <label className="form-label">Catégorie</label>
                  <Field
                    as="select"
                    name="categorie"
                    className={`form-select ${errors.categorie && touched.categorie ? "is-invalid" : ""}`}
                  >
                    <option value="">Choisir</option>
                    <option value="Linge">Linge</option>
                    <option value="Équipement">Équipement</option>
                    <option value="Produit ménage">Produit ménage</option>
                    <option value="Maintenance">Maintenance</option>
                  </Field>
                  <ErrorMessage name="categorie" component="div" className="invalid-feedback"/>
                </div>

                {/* Quantité stock */}
                <div className="col-md-4">
                  <label className="form-label">Quantité Stock</label>
                  <Field
                    type="number"
                    name="quantiteStock"
                    className="form-control"
                  />
                </div>

                {/* Seuil minimum */}
                <div className="col-md-4">
                  <label className="form-label">Seuil Minimum</label>
                  <Field
                    type="number"
                    name="seuilMin"
                    className="form-control"
                  />
                </div>

                {/* Localisation */}
                <div className="col-md-4">
                  <label className="form-label">Localisation</label>
                  <Field
                    name="localisation"
                    className={`form-control ${errors.localisation && touched.localisation ? "is-invalid" : ""}`}
                  />
                  <ErrorMessage name="localisation" component="div" className="invalid-feedback"/>
                </div>

                {/* Etat */}
                <div className="col-md-6">
                  <label className="form-label">État</label>
                  <Field
                    as="select"
                    name="etat"
                    className="form-select"
                  >
                    <option value="Disponible">Disponible</option>
                    <option value="Stock faible">Stock faible</option>
                    <option value="Rupture">Rupture</option>
                    <option value="Hors service">Hors service</option>
                  </Field>
                </div>

              </div>

              <div className="mt-4 text-end">
                <button
                  type="submit"
                  className="btn btn-success px-4"
                >
                  Enregistrer l'article
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

export default InventaireForm;