import React, { Component } from 'react'
import { connect } from 'react-redux'
import { meta } from 'react-website'

import { set } from '../redux/basic'

import './Basic.css'

@meta(() => ({
	title: 'Basic'
}))
@connect(({ basic }) => ({
	value : basic.value
}), {
	set
})
export default class Basic extends Component {
	render() {
		const { value, set } = this.props
		return (
			<div>
				<div>
					This is a basic implementation of a counter.
				</div>
				<div className="counter">
					{value}
					<button
						type="button"
						onClick={() => set(value + 1)}>
						Increment
					</button>
				</div>
			</div>
		)
	}
}