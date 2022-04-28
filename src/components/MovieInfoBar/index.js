import React from 'react';

//helpers
import { calcTime, convertMoney } from '../../helpers';

//Styles
import { Wrapper, Content } from '../MovieInfoBar/MovieInfoBar.styles';

export const MovieInfoBar = ({ time, budget, revenue }) => (
	<Wrapper>
		<Content>
			<div className="column">
				<p>Running Time: {calcTime(time)}</p>
			</div>
			<div className="column">
				<p>Budget: {convertMoney(budget)}</p>
			</div>
			<div className="column">
				<p>Revenue: {convertMoney(revenue)}</p>
			</div>
		</Content>
	</Wrapper>
);
