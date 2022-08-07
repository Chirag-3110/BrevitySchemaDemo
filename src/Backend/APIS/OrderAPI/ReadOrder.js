import { API } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
const ReadOrder = async () => {
    const listOrder = await API.graphql({
        query: queries.listOrders,
        authMode: 'API_KEY'
    });
    return listOrder;
};
export default ReadOrder;