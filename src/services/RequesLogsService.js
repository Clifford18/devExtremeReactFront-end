import axios from 'axios';

const REQUEST_API_BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

class RequestLogsService{

	 getRequestLogs(){
return axios.get(REQUEST_API_BASE_URL);
	 }

	//console.log(getRequestLogs);

}
export default new RequestLogsService()

