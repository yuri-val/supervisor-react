import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput, LongTextInput, DateInput, Filter } from 'react-admin';
import LanguageIcon from '@material-ui/icons/Language';

export const icon = LanguageIcon;

const FilterComponent = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
  </Filter>
);

export const list = (props) => (
  <List {...props} filters={ <FilterComponent /> } >
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EditButton basePath="/countries" />
    </Datagrid>
  </List>
);

const CountryTitle = ({ record }) => {
  return <span>Country {record ? `"${record.name}"` : ''}</span>;
};

export const edit = (props) => (
  <Edit title={<CountryTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export const create = (props) => (
  <Create title="Create a Country" {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export default { icon, list, edit, create };
