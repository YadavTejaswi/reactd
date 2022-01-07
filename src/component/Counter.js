import React, { Component } from 'react'


export default class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    increace() {

        this.setState({ count: this.state.count + 1 })
    }
    decrease() {

        this.setState({ count: this.state.count - 1 })
    }
    reset() {
        this.setState({ count: 0 })

    }
    auto() {
        setInterval(() => {
            this.setState(prevState => ({
                count: parseInt(prevState.count) + 1,
            }));
        }, 1000);


    };
   
    render() {
        return (
            <>
                <div className='container text-center'>
                    <h3 className='text-center text-danger'> counter</h3>
                    <button type="button" class="btn btn-primary" onClick={() => this.increace()}>+</button>

                    <span className='size'>Count: {this.state.count}</span>
                    <button type="button" class="btn btn-primary" onClick={() => this.decrease()}>-</button>
                    <br />

                    <button type="button" class="btn btn-primary my-5 mx-5" onClick={() => this.reset()}>reset</button>

                    <button type="button" class="btn btn-primary my-5" onClick={() => this.auto()}>auto</button>


                </div>


            </>

        )
    }
}
