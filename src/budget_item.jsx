import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, NumberField, TextField, EditButton, DisabledInput, TextInput, LongTextInput, DateInput, NumberInput, DeleteButton } from 'react-admin';
import ListIcon from '@material-ui/icons/ListAlt';

import { Tree, NodeView, NodeActions } from 'ra-tree-ui-materialui';

const Actions = props => (
  <NodeActions {...props}>
    <EditButton />
    <DeleteButton />
  </NodeActions>
);

export const icon = ListIcon;


export const list = (props) => (
  <List {...props} title="Budget items" >
    <Datagrid>
        <TextField source="id" />
        <NumberField source="number" />
        <TextField source="item" />
        <TextField source="title" />
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
      <NumberInput source="number" />
      <TextInput source="item" />
      <TextInput source="title" />
    </SimpleForm>
  </Edit>
);

export const create = (props) => (
  <Create title="Create a Country" {...props}>
    <SimpleForm>
      <NumberInput source="number" />
      <TextInput source="item" />
      <TextInput source="title" />
    </SimpleForm>
  </Create>
);

export default { icon, list, edit, create };
