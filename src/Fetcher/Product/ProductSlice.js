import { initialProducts } from './initialProduct'
export const ProductSlice = (state = [], action) => {
    switch (action.type) {
        case 'DeleteProduct':
            const newState = initialProducts.filter(item => item.id !== action.payload)
            return newState
        case 'EditProduct':
           
          return state
        case 'changeInitialStatusName':
            const changeInitialState = initialProducts.map(item=>{
                 
                if(item.id===action.payload.itemId){
                     item.status=action.payload.name;
                     action.payload.foo(action.payload.name)
                     return item
                }else{
                        
                     return item
                    }
               
                })
               
                return changeInitialState
        case 'openMyStatusName':
            const completedState = initialProducts.filter(item => item.status === action.payload.status)
            return completedState
        
        
        default: return state
    }

}

export function showInfo(state) {

    return (state.products);
}
export function DeleteProduct(id) {
    return {
        type: 'DeleteProduct',
        payload: id
    }
}

export function openMyStatus(myStatusName) {
    return {
        type: 'openMyStatusName',
        payload: {
            status: myStatusName
        }
    }
}
export function changeinitialStatus(statusName, id,setmynewStat) {
    return {
        type: 'changeInitialStatusName',
        payload: {
            name: statusName,
            itemId: id,
            foo:setmynewStat
        }
    }
}
export function EditProduct(item,trKey){
   return{
    type:'EditProduct',
    payload:{
        editableProduct:item,
      
    }
   };
}