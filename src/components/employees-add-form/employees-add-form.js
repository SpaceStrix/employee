import { Component } from "react";
import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = e => {
    // отменяем дефолтное поведение формы
    e.preventDefault();
    // передаем в коллбэк значения полей
    this.props.handleOnAddNewUser(this.state.name, this.state.salary);
    // очистка полей формы
    this.setState({
      name: "",
      salary: "",
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            onChange={this.onValueChange}
          />
          <input
            type="number"
            name="salary"
            value={salary}
            className="form-control new-post-label"
            placeholder="З/П в $?"
            onChange={this.onValueChange}
          />
          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
