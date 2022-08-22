import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";
function ExpenseItems(props){
    return (<div className = "expenses">
        <ExpenseItem
          title={props.json[0].title}
          amount={props.json[0].amount}
          date={props.json[0].date}
        />
        <ExpenseItem
          title={props.json[1].title}
          amount={props.json[1].amount}
          date={props.json[1].date}
        />
        <ExpenseItem
          title={props.json[2].title}
          amount={props.json[2].amount}
          date={props.json[2].date}
        />
      </div>);
}

export default ExpenseItems;