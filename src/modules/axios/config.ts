import axios from 'axios';
import { config } from 'src/config/config';

const BASE_URL = config.base_url.snak3;
const CONTENT_TYPE_POST = 'application/json';
const CLIENT_VERSION = config.version;
const BROWSER_SESSION_ID = config.uuid;

// Header defaults
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post['Content-Type'] = CONTENT_TYPE_POST;
axios.defaults.headers.common['Client-Version'] = CLIENT_VERSION;
axios.defaults.headers.common['Browser-Session-ID'] = BROWSER_SESSION_ID;

// Custom Axios Instances
const CustomAxiosPublic = axios.create();
const CustomAxiosPrivate = axios.create();

export { axios, CustomAxiosPublic, CustomAxiosPrivate };
