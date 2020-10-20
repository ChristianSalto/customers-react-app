import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CustomerListItem = ({ name, aditAction, delAction, dni, urlPath }) => {
	return (
		<div>
			<div className="customers-list-item">
				<div className="field">
					<Link to={`${urlPath}${dni}`}>{name}</Link>
				</div>
				<div className="field">
					<Link to={`${urlPath}${dni}/edit`}>{aditAction}</Link>
				</div>
				<div className="field">
					<Link to={`${urlPath}${dni}/del`}>{delAction}</Link>
				</div>
			</div>
		</div>
	)
}

CustomerListItem.propTypes = {
	name: PropTypes.string.isRequired,
	aditAction: PropTypes.string.isRequired,
	delAction: PropTypes.string.isRequired,
	dni: PropTypes.string.isRequired,
	urlPath: PropTypes.string.isRequired
}

export default CustomerListItem
