import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { addTodo } from "../actions/index";

interface State {
  dataThree: null | string;
  dataFour: string;
}

interface Props {
  dataOne: string;
  dataTwo: string;
  dispatch: Dispatch;
  todos: { id: number; text: string }[];
}

// @connect()
class TestTwo extends PureComponent<Props, State> {
  but: React.RefObject<HTMLButtonElement>;
  constructor(props: any) {
    super(props);

    this.state = { dataThree: null, dataFour: "dataFour" };
    this.but = React.createRef();
  }

  componentDidMount(): void {
    this.setState({ dataThree: "dataThree" });
  }

  onClick = (): void => {
    const { dispatch } = this.props;
    dispatch(addTodo("TestOne"));
  };

  public render() {
    const { dataThree, dataFour } = this.state;
    const { dataOne, dataTwo, todos } = this.props;
    return (
      <div>
        {dataOne} / {dataTwo} / {dataThree} / {todos[0] && todos[0].text} /{" "}
        {dataFour}
        <button onClick={this.onClick} ref="but">
          123
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: any): { todos: [] } => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TestTwo);
