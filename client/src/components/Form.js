import React, { useState } from "react";
import { Form, Button } from "react-bulma-components";
import qs from "querystring";

const { Input, Field, Control, Label, Select } = Form;

const FilterForm = () => {
  const [lang, setLang] = useState("");

  const update = (value) => {
    setLang(value);
    addParam("lang", value);
  };

  const addParam = (key, value) => {
    const queryParams = qs.parse(location.search);
    queryParams[key] = value;
    location.search = qs.stringify(queryParams);
  };

  let options = ["JavaScript", "Python", "Java", "Go"];

  return (
    <>
      <Field style={{ marginTop: "1rem" }}>
        <Label>Language</Label>
        <Control>
          <Select
            onChange={(e) => update(e.target.value)}
            name="lang"
            value={lang}
          >
            <option value="all">All</option>
            {options.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </Select>
        </Control>
      </Field>
    </>
  );
};

export default FilterForm;
