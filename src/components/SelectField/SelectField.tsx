import {
  FieldValues,
  Path,
  PathValue,
  UseControllerProps,
  useController,
} from "react-hook-form";
import Select, { StylesConfig } from 'react-select';

interface Option {
  label: string;
  value: string;
}
const customStyles:StylesConfig<Option, false> = {
  container: (provided) => ({
    ...provided,
    width: '100%',
    marginBottom: '10px',
    color: '#fcfdfd',

  }),
  control: (provided) => ({
    ...provided,
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '5px',
    fontSize: '14px',
    fontWeight: '400',
    backgroundColor: '#202B38',
    boxShadow: 'none',
    color: '#fcfdfd',
    outline: 'none',
    transition: 'all 0.3s ease-in-out',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0',
    color: '#fcfdfd',

  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    padding: '0',
  }),
  menu: (provided) => ({
    ...provided,
    fontSize: '14px',
    fontWeight: '400',
   color: '#fcfdfd',
   backgroundColor: '#202B38',
    boxShadow: 'none',
    outline: 'none',
    transition: 'all 0.3s ease-in-out',
    
  }),
  menuList: (provided) => ({
    ...provided,
    padding: '0',
    color: '#fcfdfd',

  }),
  option: (provided,state) => ({
    ...provided,
    padding: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    color: '#fcfdfd',
    backgroundColor: state.isSelected ? '#A83095' : '#202B38', 
  '&:hover': {
    backgroundColor: '#A83095',
    color: 'black',
  },

  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#fcfdfd',
  }),
};



function SelectField<T extends FieldValues>(
  props: UseControllerProps<T> & {
    options: Option[];
  }
) {
  const { options, ...controllerProps } = props;
  const {
    field: { 
      onChange,
     },
  } = useController(controllerProps);
 
  return (
      <Select
        onChange={(newValue) => onChange(newValue?.value as PathValue<T, Path<T>>)}
        options={options}
        styles={customStyles}
      />
  );
}

export default SelectField;
