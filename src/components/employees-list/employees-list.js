import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data }) => {
  const elementData = data.map(item => {
    return <EmployeesListItem key={item.id} {...item} />;
  });
  return <ul className="app-list list-group">{elementData}</ul>;
};

export default EmployeesList;
