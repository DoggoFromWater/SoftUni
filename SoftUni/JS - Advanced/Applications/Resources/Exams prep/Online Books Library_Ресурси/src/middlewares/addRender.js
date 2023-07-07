import { render } from '../../node_modules/lit-html/lit-html.js';
import { logoutUser } from '../data/auth.js';
import { layoutTemplate } from '../views/layout.js';

const main = document.getElementById('site-content');

export function addRender(ctx, next) {
	const userData = ctx.userData;
	ctx.render = renderView.bind(null, userData, logoutUser);

	function renderView(userData, logout, content) {
		render(layoutTemplate(content, logout, userData, ctx), main);
	}
	next();
}
