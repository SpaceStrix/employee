import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data, handleOnDelete, handleOnAddNewUser }) => {
  const elementData = data.map(item => {
    return (
      <EmployeesListItem
        key={item.id}
        {...item}
        handleOnDelete={() => {
          handleOnDelete(item.id);
        }}
      />
    );
  });
  return <ul className="app-list list-group">{elementData}</ul>;
};

export default EmployeesList;
