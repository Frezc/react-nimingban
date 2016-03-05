import React, { PropTypes } from 'react';

function getTypeListClassName(showTypeList) {
	let visible;
	if (showTypeList) {
		visible = 'nav__show';
	} else {
		visible = 'nav__hide';
	}
	return `nav ${visible}`;
}

function getSectionClassName(selected) {
	if (selected) {
		return 'section selected';
	} else {
		return 'section';
	}
}

function TypeList({ showTypeIndex, types, showTypeList }) {
	if (showTypeIndex >= types.length) {
		showTypeIndex = 0;
	}
	return (
		<div className={getTypeListClassName(showTypeList)}>
			{types.map((type, index) => 
				<div className={getSectionClassName(showTypeIndex === index)}>{type}</div>
			)}
		</div>
	);
}

TypeList.propTypes = {
	showTypeIndex: PropTypes.number.isRequired,
	types: PropTypes.array.isRequired,
	showTypeList: PropTypes.bool
};

TypeList.defaultProps = {
	showTypeList: true
};

export default TypeList;