import { Field, useField } from "formik";
import React from "react";
import { getStateService } from "../../service";
import { citiesER, citiesST, CityCP, citiesSC } from "./helpers";

import "./styles.css";
export const SelectField = ({
  setDataState,
  dataState,
  route,
  dataCity,
  setDataCity,
}) => {
  const [field] = useField("state");

  React.useEffect(() => {
    (async () => {
      const res = await getStateService(route);
      setDataState(res.provincias);

      if (
        field.value !== "" &&
        field.value !== "30" &&
        field.value !== "86" &&
        field.value !== "02" &&
        field.value !== "78"
      ) {
        const secondRes = await getStateService(
          `municipios?provincia=${field.value}&campos=id,nombre&max=100`
        );

        console.log(secondRes);
        setDataCity(secondRes.municipios);
      } else if (field.value === "30") {
        setDataCity(citiesER);
      } else if (field.value === "86") {
        setDataCity(citiesST);
      } else if (field.value === "02") {
        setDataCity(CityCP);
      }else if (field.value === "78") {
        setDataCity(citiesSC);
      }
    })();
  }, [setDataState, route, field.value, setDataCity]);

  return (
    <>
      <Field className="select-css" name="state" as="select">
        <option value="">Provincia</option>
        {dataState.map(({ id, nombre }) => (
          <option key={id} value={id}>
            {nombre}
          </option>
        ))}
      </Field>

      <Field className="select-css" name="city" as="select">
        <option value="">Ciudad</option>
        {field.value === ""
          ? null
          : dataCity.map(({ id, nombre }) => (
              <option key={id} value={id}>
                {nombre}
              </option>
            ))}
      </Field>
    </>
  );
};
