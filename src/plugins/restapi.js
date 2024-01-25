import Api from '@packages/restapi';

let apiHost = document.querySelector('meta[name="api-host"]').content;
apiHost = ! apiHost || apiHost === '{API_HOST}' ? 'http://localhost:1000' : apiHost;

Api.host(apiHost).suffix(`api`);

export default Api;
