import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
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
      ],
    };
  }

  deleteItem = id => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id),
      };
    });
  };

  addNewUser = (name, salary) => {
    // получаем знгачения полей формы, создаем новый объект
    const newItem = {
      name,
      salary,
      increase: false,
      key: "qwe",
    };
    // обновляем стейт лист, куда передаем новый объект и остаточным оператором старые элементы массива
    this.setState(({ data }) => {
      const newUser = [newItem, ...data];
      return {
        data: newUser,
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          handleOnDelete={this.deleteItem}
        />
        <EmployeesAddForm handleOnAddNewUser={this.addNewUser} />
      </div>
    );
  }
}

export default App;
