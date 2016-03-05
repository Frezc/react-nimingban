import { App } from './containers';

export default routeConfig = [
	{
		path: '/',
		component: App,
		indexRoute: Intro,
		childRoutes: [
			{ 
				path: 'type/:name', 
				component: PostList,
				childRoutes: [
					{ path: 'post/:id', component: PostContent }
				]
			},
		]
	}
];