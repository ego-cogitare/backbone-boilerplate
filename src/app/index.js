import '../js/app';
import '../styles/app.css';
import '../styles/skins.css';
import Backbone from 'backbone';
import LayoutView from './views/layout';
import Routes from './routes/index';

const layoutView = window.layout = new LayoutView();
layoutView.render();
$('#app').append(layoutView.$el);

const routes = new Routes();
Backbone.history.start();
