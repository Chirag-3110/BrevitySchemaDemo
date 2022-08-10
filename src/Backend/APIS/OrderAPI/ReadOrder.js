import { API } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
import ErrorHandling from '../../ErrorHandling';

const ReadOrder = async () => {
    try {
        
        const listOrder = await API.graphql({
            query: queries.listOrders,
            authMode: 'API_KEY'
        });

        return listOrder.data.listOrders.items;
    } 
    catch (error) {
        ErrorHandling(error, 'Order');
    }
};
export default ReadOrder;