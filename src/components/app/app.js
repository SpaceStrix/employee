import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

function App() {
  const data = [
    {
      name: "Shirley Swift",
      salary: 6445,
      id: "PL64133793562486816900537338",
      increase: true,
    },
    {
      name: "Theresa Batz",
      salary: 4048,
      id: "BA470054102393130809",
      increase: false,
    },
    {
      name: "Patrick Koelpin",
      salary: 5902,
      id: "SA7406834S9722CC85Y6677A",
      increase: false,
    },
  ];
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
