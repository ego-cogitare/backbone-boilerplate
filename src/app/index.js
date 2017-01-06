import app from './js/app';
import Backbone from 'backbone';
import LayoutView from './views/layout';
import Routes from './routes/index';

const layoutView = window.layout = new LayoutView();
$('#app').append(layoutView.render().$el);

const routes = new Routes();
Backbone.history.start();
