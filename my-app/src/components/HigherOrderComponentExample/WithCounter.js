import React, {Component} from 'react'

const UpdateComponent = (WrappedComponent, incrementNumber) => {
    class NewComponent extends Component {

        constructor(props) {
            super(props);

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return {count: prevState.count + incrementNumber}
            })
        }

        render() {
            const {count} = this.state;
            return (
                <div>
                    <WrappedComponent count={this.state.count} incrementCount={this.incrementCount}/>
                </div>
            );
        }
    }

    return NewComponent;

};

export default UpdateComponent;
