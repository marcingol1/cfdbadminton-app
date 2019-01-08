import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import aws_exports from './../aws-exports.js';
Amplify.configure(aws_exports);

Vue.use(AmplifyPlugin, AmplifyModules);
