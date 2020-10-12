import React, { useState } from "react";
import { Form, Button } from "react-bulma-components";
const { Input, Field, Control, Label, Select } = Form;
import { fetchORGRepos } from "../services/issuesService";

const FilterForm = () => {
  const [form, setForm] = useState({ ORG: '', repo: '' });
  const update = (({ target }) => setForm({ ...form, [target.name]: target.value }))

  let options = [];
  const getOrganisation = () =>{
    options = fetchORGRepos(form.ORG)
            .then(data =>{
              console.log(data, form.ORG)
              data.map(item =>{
                return { label: item.name.label, value: item.name.value }
              });
            })
        }
  
  return (
    <>
      <Field>
        <Control>
          <Label>Organisation</Label>
          <Input  placeholder="Enter orgs Name" name="ORG" value={form.ORG} onChange={update} onBlur={getOrganisation} />
        </Control>
      </Field>
      <Field>
        <Control>
          <Label>Repo</Label>
          <Select
           placeholder="Enter repo Name"  
           name="repo" 
           type="text" 
           onChange={update}
           options = {options}
           />
        </Control>
      </Field>
      <Button.Group>
        <Button fullwidth rounded color="primary" onClick={() => console.log(form)}>Search</Button>
      </Button.Group>
    </>
  );
}

export default FilterForm;