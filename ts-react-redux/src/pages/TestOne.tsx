import React, { PureComponent } from "react";

interface State {
  dataThree: null | string;
}

interface Props {
  dataOne: string;
  dataTwo: string;
}

export class TestOne extends PureComponent<Props, State> {
  public state = { dataThree: null };

  componentDidMount() {
    this.setState({ dataThree: "dataThree" });
  }

  public render() {
    const { dataThree } = this.state;
    const { dataOne, dataTwo } = this.props;

    return (
      <div>
        {dataOne} / {dataTwo} / {dataThree}
      </div>
    );
  }
}

export default TestOne;
